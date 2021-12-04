const router = require('express').Router()

const ProgramController = require("../controllers/program.controller");

const { userAuth, checkRole} = require('../utils/Auth')

//CRUD Program
router.post("/", userAuth, checkRole(["superadmin"]), ProgramController.createProgram);
router.get("/all", ProgramController.getAllProgram);
router.get("/:id", ProgramController.getByIdProgram);
router.patch("/:id", userAuth, checkRole(["superadmin"]),ProgramController.updateProgram);
router.delete("/:id", ProgramController.deleteProgram);


module.exports = router;