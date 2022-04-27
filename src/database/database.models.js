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

export default {
    product : new mongoose.model("products",product_schema),
    category : new mongoose.model("categorys",categorys_schema),
};