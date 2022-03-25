import {Router} from "express";
import controller from "../controllers/home.controller.js";

const router = Router();
const {showHome} = controller;

router.get(["/home","/"],showHome);

export default router;