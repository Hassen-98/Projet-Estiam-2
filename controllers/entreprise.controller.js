const EntrepriseSchema = require("../models/entreprise.model");
const ObjectID = require("mongoose").Types.ObjectId;


module.exports.createEntreprise = async (req, res) => {
    const entreprise = req.body
    const newEntreprise = new EntrepriseSchema(entreprise)
  
  try {
    await newEntreprise.save()
    res.status(201).json(newEntreprise)
  } catch (err) {
     res.status(409).json({ message: err.message})
  }
}  

module.exports.getAllEntreprise = async (req, res) => {
    const entreprises = await EntrepriseSchema.find().select();
    res.status(200).json(entreprises);
  };


module.exports.getByIdEntreprise = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnue : " + req.params.id);
  
  EntrepriseSchema.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID inconnue : " + err);
  }).select();
};

module.exports.updateEntrprise = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) 
    return res.status(400).send("ID n'est pas reconnue : " + req.params.id);
  
    const  entreprise = await EntrepriseSchema.findByIdAndUpdate(req.params.id, 
      { 
        name: req.body.name,
        logo : req.body.logo,
        
      }, 
      {new: true}
      );
  
    if (!entreprise) return res.status(404).send('ID incorrect.');
  
    res.send(entreprise)
}

module.exports.deleteEntreprise = async (req, res) => {
    const {id} = req.params
    if (!ObjectID.isValid(req.params.id)) 
        return res.status(400).send("l'Id n'est pas reconnue : " + req.params.id);
  
    const entreprise = await EntrepriseSchema.findByIdAndRemove(id)
  
    if (!entreprise) return res.status(404).send('L\'ID du entreprise n\'est pas reconnue.');
  
    res.json({ message: "l'Id de l'entreprise a été supprimé"})
  }
  

