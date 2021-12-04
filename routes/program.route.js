const router = require('express').Router()

const { userAuth, checkRole} = require('../utils/Auth')
const ProgramController = require("../controllers/program.controller");


//CRUD Program
router.post("/", userAuth, checkRole(["superadmin"]),ProgramController.createProgram);
router.get("/all", ProgramController.getAllProgram);
router.get("/:id", ProgramController.getByIdProgram);
//router.put("/:id", ProgramController.updateUser);
//router.delete("/:id", ProgramController.deleteUser);


module.exports = router;