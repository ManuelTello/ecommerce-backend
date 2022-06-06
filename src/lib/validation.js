const checkAdmin = (req,res,next)=>{
    try{
        if(req.user[0].admin) next();
    }catch(error){
        res.status(403).json({done:false,data:"Not authorized"})
    }
};

export default checkAdmin;