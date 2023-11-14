import oracledb from 'oracledb';
import { objectToString } from '../functions/objectToString';

class GenericCrud {
    constructor(tableName) {
        this.tableName = tableName;
    }

    async openConnection() {
        try {
            return await oracledb.getConnection({
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                connectionString: process.env.DB_CONNECTION_STRING,
                privilege: oracledb[process.env.DB_ROLE]
            });
        } catch (err) {
            console.error("Error de conexión:", err);
            throw err;
        }
    }

    async create(data) {
        const connection = await this.openConnection();
        try {
            console.log(data);
            const columns = Object.keys(data).join(', ');
            const values = Object.values(data).map(value => `${value != "NULL" ? `'${value}'` : `${value}` }`).join(', ');

            const sql = `INSERT INTO ${this.tableName} (${columns}) VALUES (${values})`;
            console.log(sql);
            const result = await connection.execute(sql);
            await connection.commit();

            return result;
        } finally {
            await connection.close();
        }
    }

    async read(whereClause = '') {
        const connection = await this.openConnection();
        try {
            const sql = `SELECT * FROM ${this.tableName} ${whereClause}`;
            const result = await connection.execute(sql);
    
            const columns = result.metaData.map(column => column.name);
            const rows = result.rows.map(row => {
                const rowData = {};
                row.forEach((value, index) => {
                    rowData[columns[index]] = value;
                });
                return rowData;
            });
    
            return rows;
        } finally {
            await connection.close();
        }
    }
    

    async update(data, whereClause) {
        const connection = await this.openConnection();
        try {
            const updates = objectToString(data);

            const sql = `UPDATE ${this.tableName} SET ${updates} WHERE ${whereClause}`;
            const result = await connection.execute(sql);
            await connection.commit();

            return result;
        } finally {
            await connection.close();
        }
    }

    async delete(whereClause) {
        const connection = await this.openConnection();
        try {
            const sql = `DELETE FROM ${this.tableName} WHERE ${whereClause}`;
            const result = await connection.execute(sql);
            await connection.commit();
            return result;
        } finally {
            await connection.close();
        }
    }
}

export default GenericCrud;
