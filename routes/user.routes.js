const router = require('express').Router()
const userController = require("../controllers/user.controller"); 

const { userRegister, userLogin, userAuth, serializeUser, checkRole} = require('../controllers/auth.controller')


//CRUD USERS
router.get("/all",  userAuth, checkRole(["superadmin","admin"]),userController.getAllUsers); 
router.get("/:id", userAuth, checkRole(["superadmin","admin"]),userController.getByIdUser); 
router.patch("/:id", userAuth, checkRole(["superadmin","admin"]),userController.updateUser); 
router.delete("/:id", userAuth, checkRole(["superadmin","admin"]), userController.deleteUser);

//Enregistrement admin et superadmin
router.post('/signup/superadmin', userAuth, checkRole(["superadmin"]),async (req, res) => {
    await userRegister(req.body,"superadmin", res);
})

//Enregistrement admin et superadmin
router.post('/signup/admin', userAuth, checkRole(["superadmin"]),async (req, res) => {
    await userRegister(req.body,"admin", res);
})

//connection administrateur
router.post('/signin/superadmin', async (req, res) => {
   await userLogin(req.body,"superadmin", res);
})

router.post('/signin/admin', async (req, res) => {
    await userLogin(req.body, "admin", res);
 })
 

module.exports = router;
