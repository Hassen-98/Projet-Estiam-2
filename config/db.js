const mongoose = require("mongoose")

require("dotenv").config()

const database = async () =>{
await mongoose
    .connect('mongodb+srv://' + process.env.DB_USER_PASS + '@projet-estiam.vg9ue.mongodb.net/project-estiam',
    )
    .then(() => console.log('connected to MongoDb'))
    .catch((err) => console.log('Failed to connect to MongoDB', err))
}

database()

module.exports= {SECRET:process.env.APP_SECRET} 