export const returnError = (error, data)=>{
    return {
        error,
        message : "Could not process your request",
        data 
    };
};