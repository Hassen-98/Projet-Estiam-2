const FinanceSchema = require("../models/finance.model");
const ObjectID = require("mongoose").Types.ObjectId;


module.exports.createFinance = async (req, res) => {
    const finance = req.body
    const newFinance = new FinanceSchema(finance)
  
  try {
    await newFinance.save()
    res.status(201).json(newFinance)
  } catch (err) {
     res.status(409).json({ message: err.message})
  }
}  

module.exports.getAllFinance = async (req, res) => {
    const finance = await FinanceSchema.find().select();
    res.status(200).json(finance);
  };


module.exports.getByIdFinance = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnue : " + req.params.id);
  
  FinanceSchema.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID inconnue : " + err);
  }).select();
};