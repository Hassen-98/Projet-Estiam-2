const { Schema, model } = require ("mongoose")


const CertificationSchema = new Schema (
{
    title : {
        type: String,
        required: true,
    },

   
section:[{
    
    logo : {
        type: String,
        default: "./upload/certification/logo.png"
    },
    
    module:[{
         name: {
            type: String,
            required: true,
         }
        }
    ]

}]
} 
)

module.exports = model('certification',CertificationSchema)