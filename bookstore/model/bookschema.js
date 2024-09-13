const mongoose = require("mongoose");

const bschema = new mongoose.Schema({
    name : String,
    password : String,
    imgpath : String
})

const book = mongoose.model("book",bschema)

module.exports = book;