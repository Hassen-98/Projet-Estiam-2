const router = require('express').Router()
const CertifController = require("../controllers/certification.controller");

router.post("/", CertifController.createCertif);
router.get("/all", CertifController.getAllcertif);
router.get("/:id", CertifController.getByIdcertif);

module.exports = router;