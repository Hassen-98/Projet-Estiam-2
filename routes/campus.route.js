const router = require('express').Router()
const CampusController = require("../controllers/campus.controller");

const { userAuth, checkRole} = require('../utils/Auth')

router.post("/", userAuth, checkRole(["superadmin","admin"]),CampusController.createCampus);
router.get("/all", CampusController.getAllcampus);
router.get("/:id", CampusController.getByIdCampus);
router.patch("/:id", userAuth, checkRole(["superadmin","admin"]),CampusController.updateCampus);
router.delete("/:id",userAuth, checkRole(["superadmin","admin"]),CampusController.deleteCampus);
module.exports = router;