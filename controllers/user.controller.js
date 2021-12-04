const UserSchema = require("../models/user.model"); 
const ObjectID = require("mongoose").Types.ObjectId; 
 
module.exports.getAllUsers = async (req, res) => { 
    const users = await UserSchema.find().select("-password"); 
    res.status(200).json(users); 
  };

module.exports.getByIdUser = (req, res) => { 
    if (!ObjectID.isValid(req.params.id)) 
      return res.status(400).send("ID unknown : " + req.params.id); 
   
    UserSchema.findById(req.params.id, (err, docs) => { 
      if (!err) res.send(docs); 
      else console.log("ID unknown : " + err); 
    }).select("-password"); 
}; 

module.exports.updateUser =  async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) 
      return res.status(400).send("ID unknown : " + req.params.id);

  const user = await UserSchema.findByIdAndUpdate(req.params.id, 
    { 
     username: req.body.username,
     email: req.body.email,
     password: req.body.password,
    
   }, 
   {new: true}
  );

  if (!user) return res.status(404).send('The product with the given ID was not found.');

  res.send(user)
}

module.exports.deleteUser =  async (req, res) => {
  const {id} = req.params
  if (!ObjectID.isValid(req.params.id)) 
      return res.status(400).send("ID unknown : " + req.params.id);

  const user = await UserSchema.findByIdAndRemove(id)

  if (!user) return res.status(404).send('The product with the given ID was not found.');

  res.json({ message: "l'utilisateur a été supprimé"})
}
