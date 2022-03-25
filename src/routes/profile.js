import { Router } from "express";
import controller from "../controllers/profile.controller.js";

const  router = Router();
const {
    showUser,
    updateUser,
    deleteUser,
    checkIfAdmin,
    checkIfUser,
} = controller;

router.get("/user/:uid",showUser); 
router.patch("/user",checkIfUser,updateUser); 
router.delete("/user",checkIfAdmin,deleteUser); 

export default router;