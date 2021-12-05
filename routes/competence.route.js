const router = require('express').Router()

const CompetenceController = require("../controllers/competence.controller");


//CRUD Program
router.post("/", CompetenceController.createComp);
router.get("/all", CompetenceController.getAllCom);
router.get("/:id", CompetenceController.getByIdComp);
router.patch("/:id", CompetenceController.updateComp);
router.delete("/:id",  CompetenceController.deleteComp);


module.exports = router;