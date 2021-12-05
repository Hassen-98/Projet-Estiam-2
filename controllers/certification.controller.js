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
