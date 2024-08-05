import { writeFile } from "fs";

import fetchDetails from "./fetchDetails.js";

async function crawlDetails() {
  const data = [];
  for (let i = 0; i < 64; i++) {
    const details = await fetchDetails(i.toString(2).padStart(6, "0"));
    data.push(details);
  }
  return data;
}

const data = await crawlDetails();
const json = JSON.stringify(data, null, 4);

writeFile("data.json", json, () => {});
