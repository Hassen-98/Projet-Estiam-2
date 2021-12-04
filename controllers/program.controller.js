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
    const id = req.params.id;

  ProgramSchema.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};
/*

module.exports.updateUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
      await UserModel.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            bio: req.body.bio,
          },
        },
        { new: true, upsert: true, setDefaultsOnInsert: true },
        (err, docs) => {
          if (!err) return res.send(docs);
          if (err) return res.status(500).send({ message: err });
        }
      );
    } catch (err) {
      return res.status(500).json({ message: err });
}
}


module.exports.deleteUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
      await UserModel.remove({ _id: req.params.id }).exec();
      res.status(200).json({ message: "Successfully deleted. " });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  };
*/