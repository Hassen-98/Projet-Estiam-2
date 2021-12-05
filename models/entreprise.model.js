const { Schema, model } = require ("mongoose")


const ProgramSchema = new Schema (
{
    name : {
        type: String,
        required: true,
    },


    annee : {
        type: String,
        required : true,
    },

    logo : {
        type: String,
        default: "./upload/logo.png"
    },
    description : {
        type: String,
        require: true
    },

},
    { timestamps: true}
)

module.exports = model('programs', ProgramSchema)