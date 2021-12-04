const { Schema, model } = require ("mongoose")
<<<<<<< HEAD

=======
>>>>>>> user-register


const UserSchema = new Schema (
{
    email : {
        type: String,
        required : true,
<<<<<<< HEAD
  
        lowercase: true,
=======
>>>>>>> user-register
    },

    role : {
        type: String,
        default: "admin",
        enum: ["admin", "superadmin"]
    },

    username: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
},
    { timestamps: true}
)

module.exports = model('users', UserSchema)

