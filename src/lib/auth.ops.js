import bcrypt from "bcrypt";

const validatePassword = async(log_pass, hash_pass)=>{
    try{
        const validation = await bcrypt.compare(log_pass,hash_pass);
        return validation;
    }catch(err){
        throw(err);
    }
};

const hashPassword = async(plain_password, salt_rounds, cb) =>{
    try{
        const salt = await bcrypt.genSalt(salt_rounds);
        const hashed_password = await bcrypt.hash(plain_password,salt);
        cb(hashed_password);
    }catch(err){
        throw(err);
    }
};

export default {
    validatePassword,
    hashPassword,
};
