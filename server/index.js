import express from "express";
import cors from "cors";
import QRouter from "./router/questionsR.js";
import pRouter from "./router/playerR.js";
import { config } from "dotenv";
import { getAllData } from "./Dal/dal.js";
config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/questions", QRouter);
app.use("/player", pRouter);

getAllData()

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
