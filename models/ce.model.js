const mongoose = require('mongoose')
const { Schema, model } = require ("mongoose")



const ceSchema = new mongoose.Schema ({
    entreprise : {

        name : {
            type: String,
            required: true,
        },
    
        logo : {
            type: String,
            required : true,      
        }

    },
    campus : {

        name : {
            type: String,
            required: true,
        },
    
        description : {
            type: String,
            required : true,      
        },

        
        image : {
            type: String,
            required : true,      
        }


    }



})

const CEModel = mongoose.model('partner', ceSchema)

module.exports = CEModel;