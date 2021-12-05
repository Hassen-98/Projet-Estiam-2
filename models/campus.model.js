const { Schema, model } = require ("mongoose")


const CampuSchema = new Schema (
{
    name : {
        type: String,
        required: true,
    },

    image : {
        type: String,
        default: "./upload/profil/campus1.png"
    },
    description : {
        type: String,
        require: true
    },

},
    { timestamps: true}
)

module.exports = model('campus', CampuSchema)