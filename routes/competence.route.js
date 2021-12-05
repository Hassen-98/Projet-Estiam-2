const router = require('express').Router()

const CompetenceController = require("../controllers/competence.controller");
const { userAuth, checkRole} = require('../controllers/auth.controller')

//CRUD Program
router.post("/",userAuth, checkRole(["superadmin","admin"]), CompetenceController.createComp);
router.get("/all", CompetenceController.getAllCom);
router.get("/:id", CompetenceController.getByIdComp);
router.patch("/:id",userAuth, checkRole(["superadmin","admin"]), CompetenceController.updateComp);
router.delete("/:id",userAuth, checkRole(["superadmin","admin"]),  CompetenceController.deleteComp);


module.exports = router;