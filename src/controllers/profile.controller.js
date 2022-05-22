import { returnError } from "../lib/error.log.js";

const showUser = async(req,res)=>{
    try{
        
    }catch(err){
        res.status(404).json(returnError(404,err));
    }
};

const updateUser = async(req,res)=>{
    try{

    }catch(err){
        res.status(404).json(returnError(404,err));
    }
}

const deleteUser = async(req,res)=>{
    try{
    }catch(err){
        res.status(404).json(returnError(404,err));
    }
};

const checkIfAdmin = (req,res,next)=>{
    try{
        const is_admin = req.user[0].admin;
        if(is_admin) next();
    }catch(error){
        res.status(403).redirect("/");
    }
};

const checkIfUser = (req,res,next)=>{
    if(req.isAuthenticated()) next();
    res.status(401).redirect("/");
};


export default {
    showUser,
    updateUser,
    deleteUser,
    checkIfAdmin,
    checkIfUser
};