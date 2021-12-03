const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require('../models/user.model')

const { SECRET } = require("../config/constant");


const userRegister = async (userDets, role, res) => {
  try {
     // validation de username
  let usernameNotTaken = await validateUsername(userDets.username);
  if (!usernameNotTaken) {
    return res.status(400).json({
      message: `Username déjà utilisée.`,
      success: false
    });
  }

// validation de l'email
let emailNotRegistered = await validateEmail(userDets.email);
if (!emailNotRegistered) {
  return res.status(400).json({
    message: `email déjà utilisée.`,
    success: false
  });
}

const password = await bcrypt.hash(userDets.password, 12);

    const newUser = new User({
      ...userDets,
      password,
     role
    });
    await newUser.save();
    return res.status(201).json({
      message: "vous êtes enregistré avec succès.",
      success: true
    })
    
  } catch (err) {
    return res.status(500).json({
      message: "Impossible de créer votre compte..",
      success: false
    });
    
  }



}

const userLogin = async (userCreds, role, res) => {
  let { username, password} = userCreds;

  // Vérification du nom d'utilisateur dans la base de donnée
  const user = await User.findOne({username})
  if(!user){
    return res.status(404).json({
      message: "Le nom d'utilisateur n'est pas reconnue. Connexion invalide !",
      success: false

  })
}
// Vérification role
  if(user.role !== role){
    return res.status(403).json({
      message: "Vérifié bien votre logging dans le bon portail.",
      success: false
  })
  }
  let isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    //connexion avec token
    let token = jwt.sign(
      {
        user_id: user._id,
        role: user.role,
        username: user.username,
        email: user.email
      },
      SECRET,
      { expiresIn: "7 days" }
    );

    let result = {
      username: user.username,
      role: user.role,
      email: user.email,
      token: `Bearer ${token}`,
      expiresIn: 50
    };

    return res.status(200).json({
      ...result,
      message: "Vous êtes connecté.",
      success: true
    });
  } else {
    return res.status(403).json({
      message: "Mot de passe Incorrect.",
      success: false
    });
  }
}



const validateUsername = async username => {
  let user = await User.findOne({ username });
  return user ? false : true;
};

//Passport middleware

const userAuth = passport.authenticate("jwt", { session: false });

// Verification du role
const checkRole = roles => (req, res, next) =>
  !roles.includes(req.user.role)
    ? res.status(401).json("Unauthorized")
    : next();
  



const validateEmail = async email => {
  let user = await User.findOne({ email });
  return user ? false : true;
 };

const serializeUser = user => {
  return {
    username: user.username,
    email: user.email,
    name: user.name,
    _id: user._id,
    updatedAt: user.updatedAt,
    createdAt: user.createdAt
  }
};

 module.exports = {

  userLogin,
  userRegister,
  userAuth,
  serializeUser,
  checkRole
};













  
    

    
    
 

    
  
  /*

// connexion de l'utilisateur (ADMIN, SUPER_ADMIN, USER)

const userLogin = async (userCreds, role, res) => {
  let { username, password } = userCreds;
  // verification de username dans la base de donnée 
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).json({
      message: "Username inexistant",
      success: false
    });
  }
  // verification de role
  if (user.role !== role) {
    return res.status(403).json({
      message: "s'il vous plait connectez vous à partir du bon portail.",
      success: false
    });
  }
  
  // verification de mot de passe
  let isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    //connexion avec token
    let token = jwt.sign(
      {
        user_id: user._id,
        role: user.role,
        username: user.username,
        email: user.email
      },
      SECRET,
      { expiresIn: "7 days" }
    );

    let result = {
      username: user.username,
      role: user.role,
      email: user.email,
      token: `Bearer ${token}`,
      expiresIn: 50
    };

    return res.status(200).json({
      ...result,
      message: "Vous êtes connecté.",
      success: true
    });
  } else {
    return res.status(403).json({
      message: "Mot de passe Incorrect.",
      success: false
    });
  }
};*/



// 



/*const serializeUser = user => {
 return {
   username: user.username,
   email: user.email,
   name: user.name,
   _id: user._id,
   updatedAt: user.updatedAt,
   createdAt: user.createdAt
 };
};
*/

