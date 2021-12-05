const router = require('express').Router()

const CompetenceController = require("../controllers/competence.controller");


//CRUD Program
router.post("/", CompetenceController.createComp);


module.exports = router;