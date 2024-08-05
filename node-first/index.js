const  express = require('express');
const dbconnector = require('./conf/config');
const userroute = require('./router/user_rotes');


let port = 3040;
const app = express();

app.get('/user',userroute);

app.get("/", (req, res) => {
    res.send("Welcome to the my app.");
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}...`);
    dbconnector();
});