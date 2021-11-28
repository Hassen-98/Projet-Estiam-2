const bcrypt = require("bcryptjs")
const User = require("../models/user.model")

const userRegister = async (userDets, role, res)=>{

    try {
        let usernameNotTaken = await validateUsername(userDets.username)
    if(usernameNotTaken){
        return res.status(400).json({
            message: "Username is taken.",
            success: false
        })
    }

    let emailNotRegistered = await validateUsername(userDets.email)
        if(emailNotRegistered){
            return res.status(400).json({
                message: "Email is  is already registered.",
                success: false
            })
    }

    const hashed = await bcrypt.hash(userDets.password, 12)

    const newUser = new User ({
        ...userDets,
        password: hashedPassword
    })

    await newUser.save()
    return res.status(201).json({
        message: "registre successfull !",
        success: true
    })
        
    } catch (err) {
        return res.status(500).json({
            message: "Unable to create your account",
            success: false
        })
        
    }

}

const validateUsername = async username => {
    let user = User.findOne({ username })

    if (user) {
        return false
    } else {
        return true
    }

}

const validateEmail = async email => {
    let user = User.findOne({ email })

    if (user) {
        return false
    } else {
        return true
    }

}