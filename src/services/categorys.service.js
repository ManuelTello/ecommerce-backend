import DAO from "../database/dao.js";

const dao = new DAO();

const findCategorys = async(cb)=>{
    try{
        await dao.fetchCategory((categorys)=>{
            cb(categorys);
        })
    }catch(err){
        throw(err);
    }
};

export default {
    findCategorys,
};