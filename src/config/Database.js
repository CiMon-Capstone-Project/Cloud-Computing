import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

class Database {
  constructor() {
    this.pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      port: process.env.MYSQL_PORT,
    });

    this.testConnection = this.testConnection.bind(this);
  }

  async testConnection() {
    try {
      const connection = await this.pool.getConnection();
      const [rows] = await connection.query('SELECT DATABASE() AS dbName;');
      console.log('✅ Connected to database:', rows[0].dbName); // Akan menampilkan nama database
      connection.release();

      return true;
    } catch (err) {
      console.error('❌ Database connection failed:', err);
      return false;
    }
  }
}

export default Database;