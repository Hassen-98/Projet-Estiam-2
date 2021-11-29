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

    let emailNotRegistered = await validateEmail(userDets.email)
        if(emailNotRegistered){
            return res.status(400).json({
                message: "l'Email est déjà enregistré.",
                success: false
            })
    }

    const password = await bcrypt.hash(userDets.password, 12)

    const newUser = new User ({
        ...userDets,
        password: password,
        role
    })

    await newUser.save()
    return res.status(201).json({
        message: "Enregistrement réussi !",
        success: true
    })
        
    } catch (err) {
        return res.status(500).json({
            message: "Impossible de créé votre compte",
            success: false
        })
        
    }

}

const validateUsername = async username => {
    let user = await User.findOne({ username })

    if (user) {
        return false
    } else {
        return true
    }

}

const validateEmail = async email => {
    let user = await User.findOne({ email })

    if (user) {
        return false
    } else {
        return true
    }

}

module.exports = {
    userRegister
}