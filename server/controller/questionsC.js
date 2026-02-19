import { questionsS } from "../services/questionsS.js";

export async function questionsC(req, res) {
  try {
    const result = await questionsS();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Request fail;");
  }
}
