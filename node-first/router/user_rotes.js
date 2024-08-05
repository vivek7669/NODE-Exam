const {Router}  =  require('express');
const { getuser, postuser } = require('../controller/user_controller');

const userroute = Router();

userroute.get("/",getuser);
userroute.post("/",postuser);

module.exports = userroute;