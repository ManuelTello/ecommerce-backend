import services from "../services/categorys.service.js";
import { returnError } from "../lib/error.log.js";

const {
    findCategorys
} = services;

const sendCategorys = async(req,res)=>{
    try{
        await findCategorys((data)=>{
            res.status(200).json({done:true,data});
        });       
    }catch(error){
        console.log(err);
        res.status(404).json(returnError(404,err));    
    }
}

export default {
    sendCategorys,
};