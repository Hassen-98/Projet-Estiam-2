const router = require('express').Router()

const ProgramController = require("../controllers/program.controller");

const { userAuth, checkRole} = require('../controllers/auth.controller')

//CRUD Program
router.post("/", userAuth, checkRole(["superadmin","admin"]), ProgramController.createProgram);
router.get("/all", ProgramController.getAllProgram);
router.get("/:id", ProgramController.getByIdProgram);
router.patch("/:id", userAuth, checkRole(["superadmin","admin"]),ProgramController.updateProgram);
router.delete("/:id", userAuth, checkRole(["superadmin","admin"]),ProgramController.deleteProgram);


module.exports = router;