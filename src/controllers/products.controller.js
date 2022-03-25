import service from "../services/product.service.js";
import sendInfo from "../subscriptions/res.status.js";

const {
    passProductList,
    removeProductFromDatabase,
    updateProductInfo,
    addProductToDatabse,
} = service;

const showProductsList = async(req,res)=>{
    try{
        await passProductList(null,(products)=>{
            res.status(200).json(products);
        });   
    }catch(error){
        console.log(process.env.NODE_ENV && error);
        res.status(404).json({
            status_code:404,
            error_message:"Could not process your request",
            error_data:error
        });
    }
};

const showProduct = async(req,res)=>{
    try{
        const pid = req.params.pid;
        await passProductList(pid,(product)=>{
            res.status(200).json(product);
        });
    }catch(error){
        console.log(process.env.NODE_ENV && error);
        res.status(404).json({
            status_code:404,
            error_message:"Could not process your request",
            error_data:error
        });
    }
};

const deleteProduct = async(req,res)=>{
    try{
        const pid = req.params.pid;
        await removeProductFromDatabase(pid,(op_cb)=>{
            const {done,data,code} = op_cb;
            res.status(code).json({done,data});
        });
    }catch(error){
        console.log(process.env.NODE_ENV && error);
        res.status(404).json({
            status_code:404,
            error_message:"Could not process your request",
            error_data:error
        });        
    }
};

const updateProduct = async(req,res)=>{
    try{
        const pid = req.params.pid;
        const {name} = req.body;
        await updateProductInfo(pid,name,(op_cb)=>{
            const {done,data,code} = op_cb;
            res.status(code).json({done,data});
        });
    }catch(error){
        console.log(process.env.NODE_ENV && error);
        res.status(404).json({
            status_code:404,
            error_message:"Could not process your request",
            error_data:error
        });        
    }
};

const addProduct = async(req,res)=>{
    try{
        const payload = req.body;
        await addProductToDatabse(payload);
        res.status(200).json({done:true,data:"New product added"});
    }catch(error){
        console.log(process.env.NODE_ENV && error);
        res.status(404).json({
            status_code:404,
            error_message:"Could not process your request",
            error_data:error
        });        
    }
};

const checkAdmin = (req,res,next)=>{
    try{
        if(req.user[0].admin) next();
    }catch(error){
        res.status(403).json({done:false,data:"Not authorized"})
    }
};

export default {
    showProductsList,
    showProduct,
    deleteProduct,
    updateProduct,
    addProduct,
    checkAdmin,
};