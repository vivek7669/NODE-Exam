const { Router } = require("express");
const { getTasks, postTask, updateTask, deleteTask } = require("../controller/task_controller");

const taskrouter = Router();

taskrouter.get("/",getTasks);
taskrouter.post("/",postTask);
taskrouter.patch("/:id",updateTask);
taskrouter.delete("/:id",deleteTask);

module.exports = taskrouter;
