const mongoose = require("mongoose");
// require("dot")

const dbconnector = async()=>{
    let db = await mongoose.connect();
}