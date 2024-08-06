const mongoose = require("mongoose");
require("dotenv").config();
const dbconnector = async()=>{
    let db = await mongoose.connect(process.env.DB_URL);
    if(db){
        console.log("Database is connected.");
    }
}
module.exports = dbconnector;