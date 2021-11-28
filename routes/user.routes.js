const router = require('express').Router()

const {
 
    userLogin,
    userRegister,
    userAuth,
    validateRole,
    serializeUser  
    } = require("../utils/authentification");

//Enregistrement utilisateur
router.post('/register-user', async (req, res) => {
    await userRegister(req.body, "user", res);

})

//Enregistrement administrateur
router.post('/register-admin', async (req, res) => {
    await userRegister(req.body, "admin", res);

})

//Enregistrement super-administrateur
router.post('/register-superadmin', async (req, res) => {
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
router.post('/login-superadmin', async (req, res) => {
    await userLogin(req.body, "superadmin", res);
})

//Route Profile
router.get("/profile", userAuth, async (req, res) => {
    return res.json(serializeUser(req.user));
  });

//protection utilisateur
router.get('/profile-user', userAuth, validateRole(["suser"]), async (req, res) => {
    
    return res.json("Bonjour utlisateur");
})


//protection administrateur
router.get('/profile-admin', userAuth,validateRole(["admin"]) ,async (req, res) => {
    return res.json("Bonjour Admin");

})

//protection super-administrateur
router.get('/login-superadmin',userAuth, validateRole(["superadmin"]), async (req, res) => {

    return res.json("Bonjour Super Admin");
})


module.exports = router