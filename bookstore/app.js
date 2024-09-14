const express = require("express");
const dbconnector = require("./config/db");
const path = require("path");
const hbs = require("hbs");
const bookrouter = require("./routers/bookroute");
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3040;
app.use(express.json());
app.use(express.urlencoded({extended : false}));
//? -----------------------------------------------------
// app.use(bodyParser.urlencoded({extended : false}))
// app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,"/public")));
app.use('/css', express.static(path.join(__dirname, './node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, './node_modules/bootstrap/dist/js')));
app.use('/jquery', express.static(path.join(__dirname, './node_modules/jquery/dist')));

app.set("view engine","hbs");
app.set("views",path.join(__dirname,"views"));


app.get("",(req,res)=>{
   res.render("index");
});
app.use("/book",bookrouter);
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    dbconnector();
});


