const router = require('express').Router()

const FinanceController = require("../controllers/finance.controller");


//CRUD Program
router.post("/", FinanceController.createFinance);
router.get("/all", FinanceController.getAllFinance);
router.get("/:id", FinanceController.getByIdFinance);


module.exports = router;