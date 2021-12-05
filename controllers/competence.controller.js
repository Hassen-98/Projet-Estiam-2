const CompSchema = require("../models/competence.module");
const ObjectID = require("mongoose").Types.ObjectId;


module.exports.createComp = async (req, res) => {
    const comp = req.body
    const newComp = new CompSchema(comp)
  
  try {
    await newComp.save()
    res.status(201).json(newComp)
  } catch (err) {
     res.status(409).json({ message: err.message})
  }
} 




module.exports.getAllCom = async (req, res) => {
  const competences = await CompSchema.find().select();
  res.status(200).json(competences);
};


module.exports.getByIdComp = (req, res) => {
if (!ObjectID.isValid(req.params.id))
  return res.status(400).send("ID inconnue : " + req.params.id);

CompSchema.findById(req.params.id, (err, docs) => {
  if (!err) res.send(docs);
  else console.log("ID inconnue : " + err);
}).select();
};