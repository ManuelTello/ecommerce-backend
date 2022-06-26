//import mongoose from "mongoose";
import config from "../config/db-cfg/db.mongo.cfg.js";
import { database } from "../config/server.cfg.js";
import DAOGEN from "./fabric.gen.js";

const {
    uri,
    dbName,
    user,
    pass
} = config;

const gen = new DAOGEN(database, dbName, user, pass, uri);

const connectToMongo = async()=>{
    try{
        /*console.log(`Connecting Mongoose client to Mongo Database [${new Date()}], pid:${process.pid}`)
        await mongoose.connect(uri,{dbName,pass,user});*/
    }catch(error){
        console.log("Error trying to connect to database:",error);
        throw(error);
    }
};

const disconnectFromMongo = async()=>{
    try{
        /*console.log(`Disconnecting Mongoose client to Mongo Database [${new Date()}], pid:${process.pid}`)
        await mongoose.connection.close();*/
        await gen.getDisconnect();
    }catch(error){
        console.log("Error trying to disconnect:",error);
        throw(error);
    }
}

export default {
    connectToMongo,
    disconnectFromMongo,
};