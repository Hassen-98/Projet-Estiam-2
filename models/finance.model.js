const { Schema, model } = require ("mongoose")


const FinanceSchema = new Schema (
{
    title : {
        type: String,
        required: true,
    },

    autofinance:[{
        date:{
        type: String,
       
        },
        montant : {
            type: String,
            required : true,
        },

    }],


    logoBank : {
        type: String,
        default: "./upload/finance/logoBank.png"
    },
    description : {
        type: String,
        
    },
    financement : [{
        name: {
            type: String,
            require: true
        },
        infos : {
            type: String,
            require: true
        },
    }],
    annee : {
        type: String,
        require: true
    },


},
    { timestamps: true}
)

module.exports = model('finances', FinanceSchema)