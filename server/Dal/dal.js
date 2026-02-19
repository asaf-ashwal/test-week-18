import { writeFile, readFile } from "fs/promises";
import csv from "async-csv";
// import data from "../data/";

export async function getAllData() {
  const csvString = await readFile("./data/terrorData.csv", "utf-8");
  const rows = await csv.parse(csvString, { columns: true });
  const res = rows.slice(0, 50);
  return res;
}

export async function addResult(score) {
  const data = await read_file_json();

  const newObj = {
    score: Number(data.score) + Number(score),
    date: new Date(),
  };
  await write_file_json(newObj);
  return true;
}

export async function write_file_json(data) {
  try {
    await writeFile("./data/player.json", JSON.stringify(data), "utf8");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function read_file_json() {
  try {
    const data = await readFile("./data/player.json", "utf8");
    return data ? JSON.parse(data) : {};
  } catch (error) {
    return { score: 0, date: "" };
  }
}
