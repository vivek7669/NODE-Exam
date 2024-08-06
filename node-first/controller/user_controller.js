const user = require('../model/user_scema');

const getuser = async(req,res)=>{
    let data = await user.find();
    res.send(data);
}
const getuserbyid = async(req,res)=>{
    const { id } = req.params;
    console.log(req.query.email);
    let data = await user.findById(id);
    res.send(data);
}
const getuserbyemail = async(req,res)=>{
    const { email } = req.params;
    console.log(email);
    let data = await user.findOne({email : email});
    res.send(data);
}
const postuser = async(req,res)=>{
    let data = await user.create(req.body);
    res.send(data);
}
const updateuser = async(req,res) => {
    const { id } = req.params;
    let data = await user.findByIdAndUpdate(id,req.body)
    res.send(data);
}
const deleteuser = async(req,res) => {
    const { id } = req.params;
    let data = await user.findByIdAndDelete(id);
    res.send(data);
}

module.exports = {getuser ,getuserbyid , postuser ,updateuser, deleteuser , getuserbyemail};