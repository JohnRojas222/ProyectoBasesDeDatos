import GenericCrud from './GenericCrud';
class BitacoraCrud extends GenericCrud {
    constructor() {
        super("DBA_AUDIT_TRAIL");
    }

    async read() {
        const connection = await this.openConnection();
        const whereClause = "where action_name IN ('SELECT', 'INSERT', 'UPDATE', 'DELETE')";
        try {
            const sql = `SELECT TO_CHAR(TIMESTAMP, 'YYYY-MM-DD') as Fecha,
            TO_CHAR(timestamp, 'HH24:MI:SS') as hora,
            USERNAME as usuario, 
            ACTION_NAME as Accion,
            OBJ_NAME as Tabla FROM ${this.tableName} ${whereClause}`;
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
}

export default BitacoraCrud;