
const usermiddleware = (req,res,next) => {
    const {name , email ,password} = req.body;
    if(name && email && password){
        next();
    }
    else{
        res.status(404).send("Pls Enter Data.");
    }

}

const taskmiddleware = (req,res,next)=>{
    const {user,taskname,description,status} = req.body;
    if(user && taskname && description && status){
        next();
    }
    else{
        res.status(401).send("Data Is Not Defined.");
    }
}

module.exports = {usermiddleware , taskmiddleware};