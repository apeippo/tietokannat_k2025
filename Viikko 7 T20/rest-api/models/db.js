const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'moi',
  database: 'kirjasto',
  port: 3306
});

module.exports = db;
