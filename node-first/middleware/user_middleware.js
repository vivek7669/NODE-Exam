
const usermiddleware = (req,res,next) => {
    const {name , email ,password} = req.body;
    if(name && email && password){
        next();
    }
    else{
        res.status(404).send("Pls Enter Data.");
    }

}

module.exports = usermiddleware;