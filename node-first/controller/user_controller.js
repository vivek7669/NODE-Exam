const user = require('../model/user_scema');

const getuser = async(req,res)=>{
    let data = await user.find();
    res.send(data);
}
const postuser = async(req,res)=>{
    let data = await user.create(req.body);
    res.send(data);
}
module.exports = {getuser, postuser};