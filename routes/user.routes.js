const router = require('express').Router()

const { userRegister, userLogin } = require('../utils/Auth')


//Enregistrement utilisateur
router.post('/register-user', async (req, res) => {
    await userRegister(req.body, "user", res);

})

//Enregistrement administrateur
router.post('/register-admin', async (req, res) => {
    await userRegister(req.body, "admin", res);

})

//Enregistrement super-administrateur
router.post('/register-super-admin', async (req, res) => {
    await userRegister(req.body, "superadmin", res);

})

//connection utilisateur
router.post('/login-user', async (req, res) => {
      await userLogin(req.body, "user", res);

})

//connection administrateur
router.post('/login-admin', async (req, res) => {
    await userLogin(req.body, "admin", res);

})

//connection super-administrateur
router.post('/login-super-admin', async (req, res) => {
      await userLogin(req.body, "superadmin", res);
})

//Route Profile
router.get("/profile", async (req, res) => {
   // return res.json(serializeUser(req.user));
  });

//protection utilisateur
router.post('/user-protected', async (req, res) => {
    
  //  return res.json("Bonjour utlisateur");
})


//protection administrateur
router.post('/admin-protected',async (req, res) => {
   // return res.json("Bonjour Admin");

})

//protection super-administrateur
router.post('/super-admin-protected', async (req, res) => {

   // return res.json("Bonjour Super Admin");
})


module.exports = router;

/*
const {
 
    userLogin,
    userRegister,
    userAuth,
    validateRole,
    serializeUser  
    } = require("../utils/authentification");*/