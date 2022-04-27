const showUser = async(req,res)=>{
    try{
        
    }catch(error){
        res.status(404).json({
            status_code:404,
            error_message:"Could not process your request",
            error_data:error
        });
    }
};

const updateUser = async(req,res)=>{
    try{

    }catch(error){
        res.status(404).json({
            status_code:404,
            error_message:"Could not process your request",
            error_data:error
        });
    }
}

const deleteUser = async(req,res)=>{
    try{
    }catch(error){
        res.status(404).json({
            status_code:404,
            error_message:"Could not process your request",
            error_data:error
        });
    }
};

const checkIfAdmin = (req,res,next)=>{
    try{
        const is_admin = req.user[0].admin;
        if(is_admin) next();
    }catch(error){
        res.status(403).redirect("/");
    }
};

const checkIfUser = (req,res,next)=>{
    if(req.isAuthenticated()) next();
    res.status(401).redirect("/");
};


export default {
    showUser,
    updateUser,
    deleteUser,
    checkIfAdmin,
    checkIfUser
};