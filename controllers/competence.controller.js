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


module.exports.updateComp = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) 
  return res.status(400).send("ID n'est pas reconnue : " + req.params.id);

  const  comp = await CompSchema.findByIdAndUpdate(req.params.id, 
    { 
      title: req.body.title,
      module: req.body.module,
      
    }, 
    {new: true}
    );

  if (!comp) return res.status(404).send('ID incorrect.');

  res.send(comp)
}



module.exports.deleteComp = async (req, res) => {
  const {id} = req.params
  if (!ObjectID.isValid(req.params.id)) 
      return res.status(400).send("l'Id n'est pas reconnue : " + req.params.id);

  const competence = await CompSchema.findByIdAndRemove(id)

  if (!competence) return res.status(404).send('L\'ID du competence n\'est pas reconnue.');

  res.json({ message: "l'Id de l'competence a été supprimé"})
}
