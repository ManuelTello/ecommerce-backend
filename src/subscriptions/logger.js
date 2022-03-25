import winston from "winston";

const {format,createLogger,transports} = winston;
const {File,Console} = winston.transports;
const combine = format.combine;

const checkNodeEnv = format((info,opts)=>{
    if(process.env.NODE_ENV == "development"){
        return info;
    }else{
        return false;
    }
});

const logger = createLogger({
    format:combine(
        checkNodeEnv(),
        format.simple(),
    ),
    transports:[
        new Console(),
    ],
});


export default logger;