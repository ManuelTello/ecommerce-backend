import config from "./src/config/server_cfg.js";
import logger from "./src/subscriptions/logger.js";
import connection from "./src/database/connection.js";

const {port} = config;
const {connectToMongo,disconnectFromMongo} = connection;

const setUpServer = (app)=>{
    connectToMongo();
    const server = app.listen(port,()=>{
        const pid = process.pid;
        console.log(`Server up at port:${port}, pid:${pid}`);
    });
    server.on("close",(stream)=>{
        console.log(`Worker ${process.pid} died`,stream);
        disconnectFromMongo();
    });
    process.on("unhandledRejection",(reason)=>{
        console.log("Process error: ",reason);
        disconnectFromMongo();
    });
};

export default setUpServer;