import { addResult } from "../Dal/dal.js";

export async function playerS(score) {
  const res = await addResult(score);
  return res;
}
