const express = require("express")
require ('dotenv').config({path: './config/.env'})
require("./config/db")
const app = express()

app.listen(3000, () =>{
    console.log('Listen on port 3000');
})