import express from "express";
import {playerC} from "../controller/playerC.js";


const router = express.Router();

router.post("/", playerC);

export default router;