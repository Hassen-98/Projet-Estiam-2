const router = require('express').Router()

const { userRegister, userLogin, userAuth, serializeUser, checkRole} = require('../utils/Auth')


//Enregistrement admin et superadmin
router.post('/signup/superadmin', async (req, res) => {
    await userRegister(req.body,"superadmin", res);
})
//Enregistrement admin et superadmin
router.post('/signup/admin', async (req, res) => {
    await userRegister(req.body,"admin", res);
})

//connection administrateur
router.post('/signin/superadmin', async (req, res) => {
   await userLogin(req.body,"superadmin", res);
})

router.post('/signin/admin', async (req, res) => {
    await userLogin(req.body, "admin", res);
 })
 


//Route Profile
router.get("/all", userAuth, async (req, res) => {
    return res.json(serializeUser(req.user));
  });


//protection administrateur
router.get('/admin-protected', userAuth, checkRole(["admin"]),async (req, res) => {
    return res.json("Bonjour Admin");
})

//protection super-administrateur
router.get('/superadmin-protected', userAuth, checkRole(["superadmin"]), async (req, res) => {

   return res.json("Bonjour Super Admin");
})

module.exports.getAllUsers = async (req, res) => { 
    const users = await UserSchema.find().select("-password"); 
    res.status(200).json(users); 
  };


module.exports = router;
