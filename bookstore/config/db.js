const mongoose = require("mongoose");
require("dotenv").config();

const dbconnector = async(req,res) => {
    let db = await mongoose.connect(process.env.DB_URL);
    if(db){
        console.log("Database Connection Successfully.");
    }
    else{
        console.log("Database Connection error.");   
    }
} 
module.exports = dbconnector;