const UserSchema = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;

const { userRegister, userLogin } = require('../controllers/auth.controller')

module.exports.signUpUsers = async (req, res) => {
  await userRegister(req.body, "admin" | "superadmin", res);
};

module.exports.signInadminUsers = async (req, res) => {
  await userLogin(req.body, "admin", res);
};

module.exports.signInsuperadminUsers = async (req, res) => {
  await userLogin(req.body,"superadmin", res);
};


module.exports.getAllUsers = async (req, res) => {
    const users = await UserSchema.find().select("-password");
    res.status(200).json(users);
  };

  module.exports.userInfo = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    UserSchema.findById(req.params.id, (err, docs) => {
      if (!err) res.send(docs);
      else console.log("ID unknown : " + err);
    }).select("-password");
  };

  module.exports.updateUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).json("ID unknown : " + req.params.id);
  
    try {
      await UserSchema.findOneAndUpdate(req.params.id, req.body, (err, user) =>{
        if (err) {
          return res.status(200).json({error: "Problem with Updating the   Employee recored "})
        };
        res.json({success: "Updation successfull"})
      })


  } catch (err) {
    return res.status(500).json({ message: err });




        /*{ _id: req.params.id },
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
    }*/
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