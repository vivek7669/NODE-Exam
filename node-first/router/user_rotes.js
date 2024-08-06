const {Router}  =  require('express');
const { getuser, postuser ,updateuser, deleteuser, getuserbyid, getuserbyemail } = require('../controller/user_controller');
const usermiddleware = require('../middleware/user_middleware');

const userroute = Router();

userroute.get("/",getuser);
userroute.get("/:email",getuserbyemail);
userroute.get("/:id",getuserbyid);
userroute.post("/",usermiddleware,postuser);
userroute.patch("/:id",updateuser);
userroute.delete("/:id",deleteuser);

module.exports = userroute;