const ProgramSchema = require("../models/program.model");
const ObjectID = require("mongoose").Types.ObjectId;



/*module.exports.createProgram = async  (req, res, next) => {
  const program = new program({
  title: req.body.title,
  theme: req.body.theme,
  annee: req.body.annee,
  description: req.body.description,
});
thing.save().then(
  () => {
    res.status(201).json({
      message: 'Post saved successfully!'
    });
  }
).catch(
  (error) => {
    res.status(400).json({
      error: error
    });
  }
);
}*/

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


module.exports.userInfo = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  
  ProgramSchema.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID unknown : " + err);
  }).select();
};



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
