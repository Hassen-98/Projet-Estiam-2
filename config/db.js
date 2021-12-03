const mongoose = require("mongoose")

require("dotenv").config()

const database = async () =>{
await mongoose
    .connect('mongodb://localhost:27017/ESTIAM-Projet', { useNewUrlParser: true },
    )
    .then(() => console.log('connected to MongoDb'))
    .catch((err) => console.log('Failed to connect to MongoDB', err))
}

database()

module.exports= {SECRET:process.env.APP_SECRET} 