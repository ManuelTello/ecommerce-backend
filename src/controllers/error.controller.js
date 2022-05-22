import {returnError} from "../lib/error.log.js";

const outOfBoundPage = (req,res)=>{
    res.status(404).json(returnError(404,"Page not found"));
};

export default {
    outOfBoundPage
};