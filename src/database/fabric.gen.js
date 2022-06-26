import { Sequelize } from "sequelize";
import mongoose from "mongoose";

class DAOFRABRIC {
    #database;
    #client;
    #data;
    #disconnect;

    constructor(database_type, dbname, user, password, uri = null){
        this.#database = database_type;
        this.#data = { dbname, user, password, uri };
        this.#client = this.setClient();
    }

    setClient(){
        switch(this.#database){
            case "mongo":                
                console.log(`Connecting to ${this.#database} database, [${new Date}], pid:${process.pid}`);
                const mongoose = mongoose.connect(this.#data.uri,{
                    dbName : this.#data.dbname,
                    user : this.#data.user,
                    password : this.#data.password
                });
                
                this.#disconnect = mongoose.connection.close();
                
                return mongoose;

            case "sql":
                console.log(`Connecting to ${this.#database} database, [${new Date}], pid:${process.pid}`);
                const sequelize = new Sequelize({
                    database : this.#data.dbname,
                    username : this.#data.user,
                    password : this.#data.password 
                }); 

                this.#disconnect = sequelize.close();
 
                return sequelize;
        }
    }

    getConnection(){
        return this.#client;
    }

    async getDisconnect(){
        try{
            console.log(`Disconnection ${this.#database} database ${new Date}`);
            return this.#disconnect;
        }catch(err){
            throw(err);
        }
    }
}

export default DAOFRABRIC;