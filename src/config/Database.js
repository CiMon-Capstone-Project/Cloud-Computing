import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

class Database {
  constructor() {
    console.log('DB_HOST:', process.env.DB_HOST);
    console.log('DB_USER:', process.env.MYSQL_USER);
    console.log('DB_PASSWORD:', process.env.MYSQL_PASSWORD);
    console.log('DB_DATABASE:', process.env.MYSQL_DATABASE);
    console.log('DB_PORT:', process.env.MYSQL_PORT);

    this.pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      port: process.env.MYSQL_PORT,
    });

    this.testConnection = this.testConnection.bind(this);
    this.createTables = this.createTables.bind(this);
  }

  async testConnection() {
    try {
      const connection = await this.pool.getConnection();
      const [rows] = await connection.query('SELECT DATABASE() AS dbName;');
      console.log('✅ Connected to database:', rows[0].dbName); // Akan menampilkan nama database
      connection.release();

      // Panggil fungsi createTables setelah koneksi berhasil
      await this.createTables();

      return true;
    } catch (err) {
      console.error('❌ Database connection failed:', err);
      return false;
    }
  }

  async createTables() {
    try {
      const connection = await this.pool.getConnection();
      console.log('✅ Connected to MySQL, now creating tables...');

      // Tambahkan SQL untuk membuat tabel jika belum ada
      const queries = [
        `CREATE TABLE IF NOT EXISTS contoh (
          id INT AUTO_INCREMENT PRIMARY KEY,
          title VARCHAR(255) NOT NULL
        );`,
        `CREATE TABLE IF NOT EXISTS articles (
          id INT AUTO_INCREMENT PRIMARY KEY,
          user_id INT NOT NULL,
          image_url VARCHAR(255),
          title VARCHAR(255) NOT NULL,
          description TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );`,
        `CREATE TABLE IF NOT EXISTS blog (
          id INT NOT NULL AUTO_INCREMENT,
          image_url VARCHAR(255) NOT NULL,
          title VARCHAR(255) NOT NULL,
          description TEXT NOT NULL,
          category VARCHAR(100) NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          PRIMARY KEY (id)
        );`,
        `CREATE TABLE IF NOT EXISTS detection (
          id INT NOT NULL AUTO_INCREMENT,
          user_id VARCHAR(255) NOT NULL,
          image_url VARCHAR(255) NOT NULL,
          confidence FLOAT NOT NULL,
          disease VARCHAR(100) NOT NULL,
          treatment_id INT DEFAULT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          PRIMARY KEY (id)
        );`,
        `CREATE TABLE IF NOT EXISTS treatments (
          id INT NOT NULL AUTO_INCREMENT,
          treatment_id INT DEFAULT NULL,
          disease VARCHAR(255) NOT NULL,
          symptom TEXT DEFAULT NULL,
          prevention TEXT DEFAULT NULL,
          treatment TEXT DEFAULT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          PRIMARY KEY (id)
        );`
      ];

      // Execute each query to create the tables
      for (const query of queries) {
        await connection.query(query);
        console.log(`✅ Query executed: ${query}`);
      }

      // Verifikasi tabel setelah pembuatan
      const [tables] = await connection.query('SHOW TABLES');
      console.log('Tables in database:', tables);

      const [result] = await connection.query('SHOW TABLES');
      console.log('Result of SHOW TABLES:', result); // Debugging query result


      // Tutup koneksi
      connection.release();

    } catch (err) {
      console.error('❌ Failed to create tables:', err);
    }
  }
}

export default Database;