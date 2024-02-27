const express = require("express");
const router = express.Router();
const usersController = require("../controller/usersController.js");

router.get("/", usersController.getUsers);
router.get("/:id", usersController.getUser);
router.post("/new", usersController.createUser);
router.put("/edit/:id", usersController.editUser);
router.delete("/delete/:id", usersController.deleteUser);

module.express = router;
