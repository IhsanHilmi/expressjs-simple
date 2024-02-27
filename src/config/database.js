const mysql = require("mysql2");
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSSWORD,
  database: process.env.DB_NAME,
});
module.exports = connection.promise();
