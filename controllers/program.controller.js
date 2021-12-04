const ProgramSchema = require("../models/program.model");
const ObjectID = require("mongoose").Types.ObjectId;


module.exports.createProgram = async (req, res) => {
    const program = req.body
    const newProgram = new ProgramSchema(program)
  
  try {
    await newProgram.save()
    res.status(201).json(newProgram)
  } catch (err) {
     res.status(409).json({ message: err.message})
  }
}  

module.exports.getAllProgram = async (req, res) => {
    const programs = await ProgramSchema.find().select();
    res.status(200).json(programs);
  };


module.exports.getByIdProgram = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  
  ProgramSchema.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID unknown : " + err);
  }).select();
};



  module.exports.updateProgram = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) 
    return res.status(400).send("ID n'est pas reconnue : " + req.params.id);

const program = await ProgramSchema.findByIdAndUpdate(req.params.id, 
  { 
   title: req.body.title,
   theme: req.body.theme,
   annee: req.body.annee,
   description: req.body.password,
   image: req.body.image,
  
 }, 
 {new: true}
);

if (!program) return res.status(404).send('ID incorrect.');

res.send(program)
}


module.exports.deleteProgram = async (req, res) => {
  const {id} = req.params
  if (!ObjectID.isValid(req.params.id)) 
      return res.status(400).send("l'Id n'est pas reconnue : " + req.params.id);

  const program = await ProgramSchema.findByIdAndRemove(id)

  if (!program) return res.status(404).send('L\'ID du programme n\'est pas reconnue.');

  res.json({ message: "le programme a été supprimé"})
}
