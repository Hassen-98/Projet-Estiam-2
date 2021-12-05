const CampusSchema = require("../models/campus.model");
const ObjectID = require("mongoose").Types.ObjectId;


module.exports.createCampus = async (req, res) => {
    const campus = req.body
    const newCampus = new CampusSchema(campus)
  
  try {
    await newCampus.save()
    res.status(201).json(newCampus)
  } catch (err) {
     res.status(409).json({ message: err.message})
  }
}  


module.exports.getAllcampus = async (req, res) => {
    const campus = await CampusSchema.find().select();
    res.status(200).json(campus);
  };




  module.exports.getByIdCampus = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
    
    CampusSchema.findById(req.params.id, (err, docs) => {
      if (!err) res.send(docs);
      else console.log("ID unknown : " + err);
    }).select();
  };
  

  module.exports.updateCampus = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) 
    return res.status(400).send("ID n'est pas reconnue : " + req.params.id);
  
    const Campus = await CampusSchema.findByIdAndUpdate(req.params.id, 
      { 
        name: req.body.name,        
        description: req.body.description,
        image: req.body.image,
        
      }, 
      {new: true}
      );
  
    if (!Campus) return res.status(404).send('ID incorrect.');
  
    res.send(Campus)
  }

  module.exports.deleteCampus = async (req, res) => {
    const {id} = req.params
    if (!ObjectID.isValid(req.params.id)) 
        return res.status(400).send("l'Id n'est pas reconnue : " + req.params.id);
  
    const Campus = await CampusSchema.findByIdAndRemove(id)
  
    if (!Campus) return res.status(404).send('L\'ID du Campusme n\'est pas reconnue.');
  
    res.json({ message: "le Campus a été supprimé"})
  }