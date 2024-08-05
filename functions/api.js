import express, { Router } from "express";
import serverless from "serverless-http";
import data from "./data.json";

// import fetchDetails from "../server/fetchDetails.js";

const api = express();
const router = Router();

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // const details = await fetchDetails(id);  // fetch live data
    res.send(data[parseInt(id, 2)]);
  } catch (e) {
    console.error(e);
    res.status(500).send({ status: "failed" });
  }
});

api.use("/api/", router);

export const handler = serverless(api);
