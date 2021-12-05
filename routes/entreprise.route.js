const router = require('express').Router()

const EntrepriseController = require("../controllers/entreprise.controller");


//CRUD Program
router.post("/", EntrepriseController.createEntreprise);
router.get("/all", EntrepriseController.getAllEntreprise);
router.get("/:id", EntrepriseController.getByIdEntreprise);
router.patch("/:id", EntrepriseController.updateEntrprise);
router.delete("/:id", EntrepriseController.deleteEntreprise);

module.exports = router;