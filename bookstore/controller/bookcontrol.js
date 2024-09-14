const book = require("../model/bookschema");
const multer = require("multer");
 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "upload"); // Ensure this directory exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname); // Append original filename
    }
});
const upload = multer({storage:storage})

const getdata = async(req,res) => {
    let datas = await book.find();
    res.send(datas);
} 
const savedata = async(req,res) => {
    console.log(req.body);
    console.log(req.file);
    
    // res.send(datas);
    res.send("hello");
} 

module.exports = {getdata,savedata,upload}


