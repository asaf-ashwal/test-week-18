import express from "express";
import {questionsC} from "../controller/questionsC.js";


const router = express.Router();

router.get("/", questionsC);

export default router;
