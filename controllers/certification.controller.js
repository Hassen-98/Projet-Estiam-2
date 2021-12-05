const CertifSchema = require("../models/certification.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.createCertif = async (req, res) => {
    const certif = req.body
    const newCertif= new CertifSchema(certif)
  
  try {
    await newCertif.save()
    res.status(201).json(newCertif)
  } catch (err) {
     res.status(409).json({ message: err.message})
  }
}  



module.exports.getAllcertif = async (req, res) => {
    const certif = await CertifSchema.find().select();
    res.status(200).json(certif);
  };

  module.exports.getByIdcertif = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
    
    CertifSchema.findById(req.params.id, (err, docs) => {
      if (!err) res.send(docs);
      else console.log("ID unknown : " + err);
    }).select();
  };


  module.exports.updatecertif = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) 
    return res.status(400).send("ID n'est pas reconnue : " + req.params.id);
  
    const certif = await CertifSchema.findByIdAndUpdate(req.params.id, 
      { 
        title: req.body.title,  
        section : req.body.section,
        
        
     
        
      }, 
      {new: true}
      );
  
    if (!certif) return res.status(404).send('ID incorrect.');
  
    res.send(certif)
  }
  

  module.exports.deleteCertif = async (req, res) => {
    const {id} = req.params
    if (!ObjectID.isValid(req.params.id)) 
        return res.status(400).send("l'Id n'est pas reconnue : " + req.params.id);
  
    const certif = await CertifSchema.findByIdAndRemove(id)
  
    if (!certif) return res.status(404).send('L\'ID du certification n\'est pas reconnue.');
  
    res.json({ message: "le certification a été supprimé"})
  }