const router = require('express').Router()
const CertifController = require("../controllers/certification.controller");

router.post("/", CertifController.createCertif);
router.get("/all", CertifController.getAllcertif);
router.get("/:id", CertifController.getByIdcertif);
router.patch("/:id", CertifController.updatecertif);
router.delete("/:id",  CertifController.deleteCertif);

module.exports = router;