const Router = require("express");
const {savedata,getdata, upload} = require("../controller/bookcontrol");
const bookmiddle = require("../middleware/bookmiddleware");

const bookrouter = Router();

bookrouter.get("/get",getdata);
bookrouter.post("/upload",bookmiddle,upload.single("imgpath"),savedata);

module.exports = bookrouter;