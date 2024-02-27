const db = require("../config/database.js");
var query = "";

const selectAll = () => {
  query = "SELECT * FROM users";
  return db.execute(query);
};
const createUser = (userData) => {
  query = "INSERT INTO users(username,password) VALUES(?,?)";
  return db.execute(query, [userData.username, userData.password]);
};
module.exports = { selectAll, createUser };
