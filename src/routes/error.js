import {Router} from "express";
import controller from "../controllers/error.controller.js";

const router = Router();
const {outOfBoundPage} = controller;

router.get("/",outOfBoundPage);

export default router;