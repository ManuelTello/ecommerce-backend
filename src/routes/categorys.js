import {Router} from "express";
import controllers from "../controllers/categorys.controller.js";

const {
    sendCategorys
} = controllers;

const router = Router();

router.get("/all",sendCategorys);

export default router;