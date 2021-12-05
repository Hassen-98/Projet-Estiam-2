const { Schema, model } = require ("mongoose")


const EntrepriseSchema = new Schema (
{
    name : {
        type: String,
        required: true,
    },


    logo : {
        type: String,
        default: "./upload/logo.png"
    },

},
    { timestamps: true}
)

module.exports = model('entreprise', EntrepriseSchema)