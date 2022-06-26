import DAO from "../database/dao/mongo.dao.js";
import {nanoid} from "nanoid/async";

const dao = new DAO();

const passProductList = async(pid,list)=>{
    try{
        dao.fetchProducts(pid,(products)=>{
            list(products);
        });
    }catch(error){
        throw(error);
    }
};

const removeProductFromDatabase = async(pid,done)=>{
    try{
        dao.deleteProduct(pid,(op_cb)=>{
            const code = op_cb ? 200 : 404;
            const data = op_cb ? "Done" : "Product not found";
            done({done:op_cb,data,code});
        });
    }catch(error){
        throw(error);
    }
};

const updateProductInfo = async(pid,name,done)=>{
    try{
       await dao.updateProduct(pid,name,(op_cb)=>{
            const data = op_cb ? "Done" : "Product not found";
            const code = op_cb ? 200 : 404;
            done({done:op_cb,data,code});
       });
       console.log(pid,name);
    }catch(error){
        throw(error);
    }
};

const addProductToDatabse = async(payload)=>{
    try{
        const pid = await nanoid();    
        const added_payload = {...payload,pid};
        await dao.addProduct(added_payload);
    }catch(error){
        throw(error);
    }
};

export default {
    passProductList,
    removeProductFromDatabase,
    updateProductInfo,
    addProductToDatabse,
};