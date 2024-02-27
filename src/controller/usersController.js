const UserModel = require("../models/User.js");

const getUsers = async (req, res) => {
  try {
    const [data] = await UserModel.selectAll();
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({
      message: "Something wrong in the database",
      serverMessage: error,
    });
  }
};
const getUser = (req, res) => {
  const { idUser } = req.params;
};
const createUser = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let data = await UserModel.createUser({ username, password });
};
const editUser = (req, res) => {
  const { idUser } = req.params;
};
const deleteUser = (req, res) => {
  const { idUser } = req.params;
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  editUser,
  deleteUser,
};
