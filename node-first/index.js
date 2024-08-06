const express = require("express");
const dbconnector = require("./conf/config");
const userroute = require("./router/user_rotes");
const cors = require("cors");
const taskrouter = require("./router/utask_route");

let port = 3040;

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the my app.");
});

app.use("/user", userroute);
app.use("/task", taskrouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
  dbconnector();
});
