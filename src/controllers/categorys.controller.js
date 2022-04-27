import services from "../services/categorys.service.js";

const {
    findCategorys
} = services;

const sendCategorys = async(req,res)=>{
    try{
        await findCategorys((data)=>{
            res.status(200).json({done:true,data});
        });       
    }catch(error){
        console.log(error);
        res.status(404).json({
            status_code:404,
            error_message:"Could not process your request",
            error_data:error
        });    
    }
}

export default {
    sendCategorys,
};