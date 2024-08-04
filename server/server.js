import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import getData from "./ichingService.js";

const server = express();

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = dirname(__filename);
server.use(express.static(join(__dirname, "../public")));

server.get("/api/:data", async (req, res) => {
  const { data } = req.params;
  try {
    const details = await getData(data);
    res.send(JSON.stringify(details));
  } catch (error) {
    res.status(500).send("Error getting the details");
  }
});

server.get("*", (req, res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
});

server.listen(3000, () => {
  console.log("Proxy server running on port 3000");
});
