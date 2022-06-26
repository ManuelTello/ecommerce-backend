import passport from "passport";
import {Strategy as LocalStrategy} from "passport-local";
import DAO from "../database/dao/mongo.dao.js";
import auth_ops from "../lib/auth.ops.js";
import user_gen from "../lib/user.gens.js";

const dao = new DAO();
const { generateUserUID } = user_gen;
const {
    validatePassword,
    hashPassword,
} = auth_ops;

const login = passport.use("login",new LocalStrategy({
    usernameField:"email",
    passwordField:"password"
    },async(email,password,done)=>{
    await dao.returnUser(email,(user_list)=>{
        if(user_list > 0){
            dao.returnPassword(email,(db_pass)=>{
                const validation = validatePassword(password, db_pass);
                if(validation){
                    return done(null,user[0]);
                }else{
                    return done(null,false,{status:404,body:"Wrong password"});
                }
            });
        }else{
            done(null,false,{status:404,body:"User does not exist"});
        }
    });
}));

const signin = passport.use("signin",new LocalStrategy({
    passReqToCallback:true,
    passwordField:"password_form",
    usernameField:"email"
    },async(req,email,password_form,done)=>{
    try{
        await dao.returnUser(email, (user)=>{
            if(user.length == 0 ){
                let {name, lastname, address, age, prefix, phone} = req.body;
                const uid = generateUserUID();

                hashPassword(password_form, 10, (password)=>{
                    age = parseInt(age);
                    prefix = parseInt(prefix);
                    phone = parseInt(prefix);
                    const payload = {uid, email, password, name, lastname, address, age, prefix, phone};
                    dao.createUser(payload,(save)=>{
                        done(null,save);
                    });
                });
            }else{
                console.log("Usuario repetido:",user);
                done(null,false);
            }
        });
    }catch(err){
        throw(err);
    }
}));

passport.serializeUser((user, done)=>{
    console.log("Serializando usuario");
    done(null, user.email);
});

passport.deserializeUser(async(email, done)=>{
    console.log("Deserealizando usuario");
    try{
        await dao.returnUser(email, (user)=>{
            return done(null,user[0]);
        })
    }catch(err){
        return done(null,false)
        throw(err);
    }
})

export default {
    login,
    signin
}