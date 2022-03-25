import {Router} from "express";
import controller from "../controllers/products.controller.js";

const router = Router();
const { 
    showProductsList,
    showProduct,
    deleteProduct,
    updateProduct,
    addProduct,
    checkAdmin
} = controller;

router.get("/list",showProductsList);
router.get("/list/:pid",showProduct)
router.delete("/:pid",checkAdmin,deleteProduct);
router.patch("/:pid",checkAdmin,updateProduct);
router.post("/add",checkAdmin,addProduct);

export default router;