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
