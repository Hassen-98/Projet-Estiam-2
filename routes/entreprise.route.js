const router = require('express').Router()

const EntrepriseController = require("../controllers/entreprise.controller");

const { userAuth, checkRole} = require('../utils/Auth')

//CRUD Program
router.post("/", userAuth, checkRole(["superadmin","admin"]),EntrepriseController.createEntreprise);
router.get("/all", EntrepriseController.getAllEntreprise);
router.get("/:id", EntrepriseController.getByIdEntreprise);
router.patch("/:id", userAuth, checkRole(["superadmin","admin"]),EntrepriseController.updateEntrprise);
router.delete("/:id", userAuth, checkRole(["superadmin","admin"]),EntrepriseController.deleteEntreprise);

module.exports = router;