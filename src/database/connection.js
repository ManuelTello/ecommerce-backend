import mongoose from "mongoose";
import config from "../config/mongo_cfg.js";

const {
    uri,
    dbName,
    user,
    pass
} = config;

const connectToMongo = async()=>{
    try{
        console.log(`Connecting Mongoose client to Mongo Database [${new Date()}], pid:${process.pid}`)
        await mongoose.connect(uri,{dbName,pass,user});
    }catch(error){
        console.log("Error trying to connect to Mongo:",error);
        throw(error);
    }
};

const disconnectFromMongo = async()=>{
    try{
        console.log(`Disconnecting Mongoose client to Mongo Database [${new Date()}], pid:${process.pid}`)
        await mongoose.connection.close();
    }catch(error){
        console.log("Error trying to disconnect:",error);
        throw(error);
    }
}

export default {
    connectToMongo,
    disconnectFromMongo,
};