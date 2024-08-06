const mongoose = require('mongoose');

let utaskschema = new mongoose.Schema({
    user : String,
    taskname: String,
    description: String,
    status: String
});

let task = mongoose.model("task", utaskschema);

module.exports = task;