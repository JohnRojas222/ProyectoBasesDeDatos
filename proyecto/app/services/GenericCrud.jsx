import oracledb from 'oracledb';
import { objectToString } from '../functions/objectToString';
const ConnectDBUtil = require('./Coneccion.jsx');
class GenericCrud {
    constructor(tableName) {
        this.tableName = tableName;
        this.connectDB = ConnectDBUtil.connectDB;
    }

    async openConnection() {
        try {
            console.log("33333333333333333333333", ConnectDBUtil.connectDB);
            return await oracledb.getConnection(ConnectDBUtil.connectDB);
        } catch (err) {
            console.error("Error de conexión:", err);
            throw err;
        }
    }

    async create(data) {
        const connection = await this.openConnection();
        try {
            const columns = Object.keys(data).join(', ');
            const values = Object.values(data).map(value => `${value != "NULL" ? `'${value}'` : `${value}` }`).join(', ');

            const sql = `INSERT INTO admin.${this.tableName} (${columns}) VALUES (${values})`;
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
            const sql = `SELECT * FROM admin.${this.tableName} ${whereClause}`;
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

            const sql = `UPDATE admin.${this.tableName} SET ${updates} WHERE ${whereClause}`;
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
            const sql = `DELETE FROM admin.${this.tableName} WHERE ${whereClause}`;
            const result = await connection.execute(sql);
            await connection.commit();
            return result;
        } finally {
            await connection.close();
        }
    }

    async chageConection(codigo, password) {
        console.log(codigo, password);
        console.log("11111111111111111111111111", ConnectDBUtil.connectDB);
        const cod = "" + codigo;
        const pas = ""+password;
        console.log("11111111111111111111111111", cod, " ", pas);
        ConnectDBUtil.updateConnectDB({
            user: codigo,
            password: password,
            connectionString: process.env.DB_CONNECTION_STRING,
            privilege: oracledb[""]
          });
        console.log("2222222222222222222222", ConnectDBUtil.connectDB);
    }

    async userRole(whereClause = '') {
        const connection = await this.openConnection();
        try {
            const sql = `SELECT GRANTED_ROLE FROM DBA_ROLE_PRIVS ${whereClause}`;
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
    async logout(){
        console.log("Putaaaaaaaaaaaaaaaaaaaaaamadreeeeeeeeeee");
        ConnectDBUtil.updateConnectDB(
            {
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                connectionString: process.env.DB_CONNECTION_STRING,
                privilege: oracledb[process.env.DB_ROLE]
              }
        );
       
    }
      
}

export default GenericCrud;
