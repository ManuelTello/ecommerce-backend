import mongoose from "mongoose";

const product_schema = new mongoose.Schema({
    pid:{type:String,required:true},
    name:{type:String,required:true},
    description:{type:String,requied:true},
    timestamp:{type:Number,required:true},
    price:{type:Number,required:true},
    stock:{type:Number,required:true},
    image:{type:String,default:"product_default.png"}
});

const categorys_schema = new mongoose.Schema({
    name:{type:String,required:true},
    subcat:{type:[String],required:false,default:[]},
});

const user_schema = new mongoose.Schema({
    uid:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    name:{type:String, required:true},
    lastname:{type:String, required:true},
    address:{type:String, required:true},
    age:{type:Number, required:true},
    prefix:{type:Number, required:true},
    phone:{type:Number, required:true},
    admin:{type:Boolean, default:false}
})

export default {
    product : new mongoose.model("products",product_schema),
    category : new mongoose.model("categorys",categorys_schema),
    user : new mongoose.model("users",user_schema),
};