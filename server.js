const express = require("express")
require ('dotenv').config({path: './config/.env'})
require("./config/db")
const app = express()
const body_parser= require("body-parser")
const cors = require("cors")

app.listen(process.env.PORT, () =>{
    console.log(`Listen on port ${process.env.PORT}`);
})