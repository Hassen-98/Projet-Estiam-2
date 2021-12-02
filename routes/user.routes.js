const router = require('express').Router()
const userController = require("../controllers/user.controller");


//CRUD USERS
router.post("/signup", userController.signUpUsers);
router.post("/signin-admin", userController.signInadminUsers);
router.post("/signin-super", userController.signInsuperadminUsers);
router.get("/all", userController.getAllUsers);
router.get("/:id", userController.userInfo);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);


module.exports = router;

