import express from "express";
import {testC} from "../controller/tC.js";


const router = express.Router();

router.get("/", testC);

export default router;
