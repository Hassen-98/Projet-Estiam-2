const UserSchema = require("../models/user.model"); 
const ObjectID = require("mongoose").Types.ObjectId; 
 
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

/*module.exports.updateUser = ('/:id', async (req, res, next) => {
  if (!ObjectID.isValid(req.params.id)) 
  return res.status(400).send("ID unknown : " + req.params.id); 
    next();

  const user = await UserSchema.findByIdAndUpdate(req.params.id, 
    { 
     username: req.body.username,
     email: req.body.email,
     password: req.body.password,
     role: req.body.role,
   }, 
  );

  if (!user) return res.status(404).send('The product with the given ID was not found.');
   res.save(user)
  res.send(user)


  
})
*/