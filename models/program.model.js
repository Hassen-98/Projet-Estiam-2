const { Schema, model } = require ("mongoose")


const ProgramSchema = new Schema (
{
    title : {
        type: String,
        required: true,
    },

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
        default: "./upload/profil/program.png"
    },
    description : {
        type: String,
        require: true
    },

},
    { timestamps: true}
)

module.exports = model('programs', ProgramSchema)