const express = require("express")
require ('dotenv').config({path: './config/.env'})
require("./config/db")
const app = express()
const body_parser= require("body-parser")
const cors = require("cors")

app.use(cors())

app.use(body_parser.json())

app.use("api/users", require("./routes/user.routes"))

app.listen(process.env.PORT, () =>{
    console.log(`Listen on port ${process.env.PORT}`);
})
