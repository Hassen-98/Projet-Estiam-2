const router = require('express').Router()
const CampusController = require("../controllers/campus.controller");



router.post("/", CampusController.createCampus);
router.get("/all", CampusController.getAllcampus);

module.exports = router;