const router = require('express').Router()
const CertifController = require("../controllers/certification.controller");

router.post("/", CertifController.createCertif);

module.exports = router;