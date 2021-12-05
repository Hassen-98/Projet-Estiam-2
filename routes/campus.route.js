const router = require('express').Router()
const CampusController = require("../controllers/campus.controller");



router.post("/", CampusController.createCampus);

module.exports = router;