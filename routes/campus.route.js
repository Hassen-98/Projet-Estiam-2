const router = require('express').Router()
const CampusController = require("../controllers/campus.controller");



router.post("/", CampusController.createCampus);
router.get("/all", CampusController.getAllcampus);
router.get("/:id", CampusController.getByIdCampus);
router.patch("/:id", CampusController.updateCampus);
module.exports = router;