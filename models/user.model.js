const mongoose = require('mongoose')
const validator = require('email-validator')


const userSchema = new mongoose.Schema ({
    pseudo : {
        type: String,
        required: true,
        minLength : 3,
        maxLength: 55,
     
    },
    email : {
        type: String,
        required : true,
       validate: [validator],
        lowercase: true,
    },
    password : {
        type: String,
        require: true,
        max: 1024,

    }

})

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel;