const mysql = require('mysql');

const db = mysql.createPool({
  host: 'containers-us-west-192.railway.app',
  user: 'root',
  password: '6qwMfSO7EFLvyrxm1tQZ',
  database: 'railway'
});

exports.db = db;