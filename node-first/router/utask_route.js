const { Router } = require("express");
const { getTasks, getTasksbyid , postTask, updateTask, deleteTask, getTasksbyname } = require("../controller/task_controller");
const { taskmiddleware } = require("../middleware/user_middleware");

const taskrouter = Router();

taskrouter.get("/",getTasks);
taskrouter.get("/:taskname",getTasksbyname);
taskrouter.get("/:id",getTasksbyid);
taskrouter.get("/:",getTasksbyid);
taskrouter.post("/",taskmiddleware,postTask);
taskrouter.patch("/:id",updateTask);
taskrouter.delete("/:id",deleteTask);

module.exports = taskrouter;
