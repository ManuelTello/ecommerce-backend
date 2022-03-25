const outOfBoundPage = (req,res)=>{
    res.status(404).json({
        status_code:404,
        error_message:"Page not found",
        error_message:"Page not found"
    });
};

export default {
    outOfBoundPage
};