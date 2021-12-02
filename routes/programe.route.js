const router = require('express').Router()
const ProgramController = require("../controllers/program.controller");


//CRUD USERS
router.get("/all", ProgramController.getAllUsers);
//router.get("/:id", ProgramController.userInfo);
//router.put("/:id", ProgramController.updateUser);
//router.delete("/:id", ProgramController.deleteUser);