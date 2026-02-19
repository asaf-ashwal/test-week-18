import { getAllData } from "../Dal/dal.js";

export async function questionsS() {
  const res = await getAllData();
  return res;
}
