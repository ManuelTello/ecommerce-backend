import service from "../services/product.service.js";
import {returnError} from "../lib/error.log.js";

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
    }catch(err){
        res.status(404).json(returnError(404,err));
    }
};

const showProduct = async(req,res)=>{
    try{
        const pid = req.params.pid;
        await passProductList(pid,(product)=>{
            res.status(200).json(product);
        });
    }catch(err){
        res.status(404).json(returnError(404,err));
    }
};

const deleteProduct = async(req,res)=>{
    try{
        const pid = req.params.pid;
        await removeProductFromDatabase(pid,(op_cb)=>{
            const {done,data,code} = op_cb;
            res.status(code).json({done,data});
        });
    }catch(err){
        res.status(404).json(returnError(404,err));
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
    }catch(err){
        res.status(404).json(returnError(404,err));
    }
};

const addProduct = async(req,res)=>{
    try{
        const payload = req.body;
        await addProductToDatabse(payload);
        res.status(200).json({done:true,data:"New product added"});
    }catch(err){
        res.status(404).json(returnError(404,err));
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