import models from "./database.models.js";

const {product,category} = models;

class DAO{
    constructor(){

    }

    async fetchProducts(pid,cb){
        try{
            const products = pid ? await product.findOne({pid:pid}).lean(true) : await product.find({}).lean(true)
            cb(products);
        }catch(error){
            throw(error);
        }
    }

    async deleteProduct(pid,done){
        try{
            const del_operation = await product.deleteOne({pid:pid});
            done(del_operation.deletedCount == 1 ? true : false);
        }catch(error){
            throw(error);
        }
    }

    async updateProduct(pid,name,description,timestamp,price,stock,image,done){
        try{
            const patch_operation = await product.updateOne({pid:pid},{
                name:name,
                description:description,
                timestamp:timestamp,
                price:price,
                stock:stock,
                image:image
            });
            done(patch_operation.matchedCount == 1 ? true : false);
        }catch(error){
            throw(error);
        }
    }

    async addProduct({pid,name,description,timestamp,price,stock,image}){
        try{
            const add_document = await product.insertMany({
                pid:pid,
                name:name,
                description:description,
                timestamp:timestamp,
                price:price,
                stock:stock,
                image:image
            });
        }catch(error){
            throw(error);
        }
    }

    async fetchCategory(cb){
        try{
            const categorys = await category.find().lean();
            cb(categorys);
        }catch(err){
            throw(err);
        }
    }
}

export default DAO;