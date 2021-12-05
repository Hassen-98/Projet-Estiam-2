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