const router = require('express').Router()

const ProgramController = require("../controllers/program.controller");


//CRUD Program
router.post("/", ProgramController.createProgram);
router.get("/all", ProgramController.getAllProgram);
router.get("/:id", ProgramController.userInfo);
//router.put("/:id", ProgramController.updateUser);
//router.delete("/:id", ProgramController.deleteUser);


module.exports = router;