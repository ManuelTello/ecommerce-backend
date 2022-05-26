import models from "./database.models.js";

const {product, category, user} = models;

class DAO{
    constructor(){

    }

    // Categorias
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

    // Categorias
    async fetchCategory(cb){
        try{
            const categorys = await category.find().lean();
            cb(categorys);
        }catch(err){
            throw(err);
        }
    }

    // Usuarios
    async returnAllUsers(cb){
        try{
            const users = await user.find({}).lean();
            cb(users);
        }catch(err){
            throw(err)
        }
    }

    async returnUser(email,cb){
        try{
            const user_find = await user.find({email:email}).lean();
            cb(user_find);
        }catch(err){
            throw(err)
        }
    }

    async deleteUser(uid, done){
        try{
            const del_op = await user.deleteOne({uid:uid});
            done(del_op.deletedCount != 0 ? true : false);
        }catch(err){
            throw(err);
        }
    }

    async createUser(payload, done){
        const {uid, email, password, name, address, age, prefix, phone} = payload;
        try{
            const new_user = user.insertOne({
                uid:uid,
                email:email,
                password:password,
                name:name,
                address:address,
                age:age,
                prefix:prefix,
                phone:phone
            });
            console.log(`Nuevo usuario: ${new_user}`);
        }catch(err){
            throw(err);
        }
    }
}

export default DAO;