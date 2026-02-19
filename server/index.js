import express from "express";
import cors from "cors";
import tRouter from "./router/t.js";
import { config } from "dotenv";
config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/test", tRouter);

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
