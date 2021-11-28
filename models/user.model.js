const mongoose = require('mongoose')
const { Schema, model } = require ("mongoose")
const validator = require('email-validator')


const userSchema = new mongoose.Schema ({
    name : {
        type: String,
        required: true,
    },

    email : {
        type: String,
        required : true,
       validate: [validator],
        lowercase: true,
    },

    role : {
        type: String,
        require: true,
        default: "admin",
        enum: ["user", "admin", "superadmin"]
    },

    username: {
        type: String,
        require: true,
    },

    password: {
        type: String,
        require: true,
    },

})

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel;