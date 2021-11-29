require("dotenv").config()


module.exports = {
    DB: process.env.APP_DB,
    PORT: process.env.APP_PORT,
    SECRET: process.env.APP_SECRET
}


/*module.exports = {SECRET:process.env.APP_SECRET} 
mongoose
    .connect('mongodb+srv://' + process.env.DB_USER_PASS +'@cluster0.vg9ue.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    )
    .then(() => console.log('connected to MongoDb'))
    .catch((err) => console.log('Failed to connect to MongoDB', err))

*/