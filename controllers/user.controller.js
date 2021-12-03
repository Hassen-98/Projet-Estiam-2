const UserSchema = require("../models/user.model"); 
const ObjectID = require("mongoose").Types.ObjectId; 
 
module.exports.getAllUsers = async (req, res) => { 
    const users = await UserSchema.find().select("-password"); 
    res.status(200).json(users); 
  };