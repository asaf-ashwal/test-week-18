import { addResult } from "../Dal/dal.js";

export async function playerS(score) {
  const newObj = { score, date: new Date() };
  const res = await addResult(newObj);
  return res;
}
