import oracledb from 'oracledb';

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
            const values = Object.values(data);
            const binds = values.map(() => '?').join(', ');

            const sql = `INSERT INTO ${this.tableName} (${columns}) VALUES (${binds})`;
            const result = await connection.execute(sql, values, { autoCommit: true });
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
            const updates = Object.keys(data).map(key => `${key} = ?`).join(', ');
            const values = Object.values(data);

            const sql = `UPDATE ${this.tableName} SET ${updates} WHERE ${whereClause}`;
            const result = await connection.execute(sql, values, { autoCommit: true });
            return result;
        } finally {
            await connection.close();
        }
    }

    async delete(whereClause) {
        const connection = await this.openConnection();
        try {
            const sql = `DELETE FROM ${this.tableName} WHERE ${whereClause}`;
            const result = await connection.execute(sql, { autoCommit: true });
            return result;
        } finally {
            await connection.close();
        }
    }
}

export default GenericCrud;