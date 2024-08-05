const  express = require('express');
let port = 3040;
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the my app.");
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}...`);
});