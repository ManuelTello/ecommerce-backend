import service from "../services/home.service.js";

const {
    searchProductsList
} = service;

const showHome = async(req,res)=>{
    try{
        await searchProductsList((products)=>{
            
        });
    }catch(error){
        console.log("Custom error\n",error);
        res.status(404).json({
            status_code:404,
            error_message:"Could not process your request",
            error_data:error
        });
    }
};

export default {
    showHome
};