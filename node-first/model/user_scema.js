const mongoose = require('mongoose');

const userScema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
})

const user = mongoose.model("user",userScema);

module.exports = user;