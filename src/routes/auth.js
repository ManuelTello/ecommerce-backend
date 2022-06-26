import {Router} from "express";
import passport from "passport";
import strategys from "../subscriptions/passport.strategys.js";

const router = Router();

router.get("/fail",(req,res)=> res.status(404).json({status:404,body:"No se pudo registrar / loguear"}));
router.get("/signed",(req,res)=> res.status(200).json({status:200,body:"Se puedo registrar"}));
router.get("/loged",(req,res)=> res.status(200).json({status:200,body:"Se pudo logear"}));

router.post("/login",passport.authenticate("login",{successMessage:"Logeado",failureMessage:"No logeado"}))
router.post("/signin",passport.authenticate("signin",{failureRedirect:"/fail",successMessage:"/signed"}));

export default router;