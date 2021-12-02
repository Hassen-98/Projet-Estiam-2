const { Schema, model } = require ("mongoose")


const ProgramSchema = new Schema (
{
    theme : {
        type: String,
        required: true,
    },

    annee : {
        type: String,
        required : true,
    },

    image : {
        type: String,
    },
    description : {
        type: String,
        require: true
    },

},
    { timestamps: true}
)

module.exports = model('users', UserSchema)

