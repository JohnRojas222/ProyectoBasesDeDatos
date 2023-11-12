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
                privilege: oracledb[process.env.DB_ROLE] // Se utiliza para especificar el rol SYSDBA
            });
        } catch (err) {
            console.error("Error de conexión:", err);
            throw err;
        }
    }

    async create(data) {
        const connection = await this.openConnection();
        try {
            const columns = Object.keys(data).join(', ');
            const values = Object.values(data).map(value => `'${value}'`).join(', ');

            const sql = `INSERT INTO ${this.tableName} (${columns}) VALUES (${values})`;
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
            return result.rows;
        } finally {
            await connection.close();
        }
    }

    async update(data, whereClause) {
        const connection = await this.openConnection();
        try {
            const updates = objectToString(data);
            //const updates = Object.keys(data).map(key => `${key} = ?`).join(', ');
            //const values = Object.values(data);

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
