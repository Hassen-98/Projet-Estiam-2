const router = require('express').Router()

const FinanceController = require("../controllers/finance.controller");

const { userAuth, checkRole} = require('../utils/Auth')

//CRUD Program
router.post("/", userAuth, checkRole(["superadmin","admin"]),FinanceController.createFinance);
router.get("/all", FinanceController.getAllFinance);
router.get("/:id", FinanceController.getByIdFinance);
router.patch("/:id", userAuth, checkRole(["superadmin","admin"]),FinanceController.updateFinance);
router.delete("/:id", userAuth, checkRole(["superadmin","admin"]),FinanceController.deleteFinance);


module.exports = router;