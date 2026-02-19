import { playerS } from "../services/playerS.js";

export async function playerC(req, res) {
  try {
    if (!req.body || !req.body.score)
      return res.status(400).send("Most send score !!!");
    const { score } = req.body;
    const result = await playerS(score);
    if (result !== true) return res.status(500).send("Request fail;");
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Request fail;");
  }
}
