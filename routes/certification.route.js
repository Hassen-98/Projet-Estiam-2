const router = require('express').Router()
const CertifController = require("../controllers/certification.controller");

const { userAuth, checkRole} = require('../controllers/auth.controller')

router.post("/", userAuth, checkRole(["superadmin","admin"]),CertifController.createCertif);
router.get("/all", CertifController.getAllcertif);
router.get("/:id", CertifController.getByIdcertif);
router.patch("/:id",userAuth, checkRole(["superadmin","admin"]), CertifController.updatecertif);
router.delete("/:id", userAuth, checkRole(["superadmin","admin"]), CertifController.deleteCertif);

module.exports = router;