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

module.exports.updateFinance = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) 
  return res.status(400).send("ID n'est pas reconnue : " + req.params.id);

  const  finance = await FinanceSchema.findByIdAndUpdate(req.params.id, 
    { 
      title: req.body.title,
      autofinance : req.body.autofinance,
      logoBank : req.body.logoBank,
      description : req.body.description,
      financement : req.body.financement,
      
    }, 
    {new: true}
    );

  if (!finance) return res.status(404).send('ID incorrect.');

  res.send(finance)
}

module.exports.deleteFinance = async (req, res) => {
  const {id} = req.params
  if (!ObjectID.isValid(req.params.id)) 
      return res.status(400).send("l'Id n'est pas reconnue : " + req.params.id);

  const finance = await FinanceSchema.findByIdAndRemove(id)

  if (!finance) return res.status(404).send('L\'ID du finance n\'est pas reconnue.');

  res.json({ message: "l'Id du finance a été supprimé"})
}
