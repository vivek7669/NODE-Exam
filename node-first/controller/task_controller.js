const task = require("../model/utask_schema");

const getTasks = async (req, res) => {
    let data = await task.find();
    res.send(data);
}

const postTask = async (req, res) => {
    let data = await task.create(req.body);
    res.send(data);
}

const updateTask = async (req, res) => {
    const {id} = req.params;
    let data = await task.findByIdAndUpdate(id, req.body, { new: true });
    res.send(data);
}

const deleteTask = async (req, res) => {
    const {id} = req.params;
    let data = await task.findByIdAndDelete(id);
    res.send(data);
}

module.exports = { getTasks, postTask, updateTask, deleteTask };