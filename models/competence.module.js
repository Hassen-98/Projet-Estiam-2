const { Schema, model } = require ("mongoose")


const CompSchema = new Schema (
{
    title : {
        type: String,
        required: true,
    },

   

    module:[{

    
    annee : {
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: true,
    },
    competence : {
        type: String,
        required: true,
    }

}]
} 
)

module.exports = model('competance',CompSchema)