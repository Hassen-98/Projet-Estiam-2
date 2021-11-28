const router = require('express').Router()

const {
     userLogin,
     userRegister,
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

//protection utilisateur
router.post('/profile-user', async (req, res) => {


})


//protection administrateur
router.post('/profile-admin', async (req, res) => {


})

//protection super-administrateur
router.post('/login-superadmin', async (req, res) => {


})


module.exports = router