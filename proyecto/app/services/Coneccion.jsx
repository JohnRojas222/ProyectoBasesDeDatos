import oracledb from 'oracledb';
class Coneccion {
    static connectDB = {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectionString: process.env.DB_CONNECTION_STRING,
      privilege: oracledb[process.env.DB_ROLE]
    };

    static updateConnectDB(updatedData) {
       Coneccion.connectDB = updatedData;
      }
  }
  
  module.exports = Coneccion;
  