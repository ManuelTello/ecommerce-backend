import {Router} from "express";
import controller from "../controllers/products.controller.js";
import checkAdmin from "../lib/validation.js";

const router = Router();
const { 
    showProductsList,
    showProduct,
    deleteProduct,
    updateProduct,
    addProduct,
} = controller;

router.get("/all",showProductsList);
router.get("/:pid",showProduct)
router.delete("/:pid",checkAdmin,deleteProduct);
router.patch("/:pid",checkAdmin,updateProduct);
router.post("/add",checkAdmin,addProduct);

export default router;