import express, { Router } from "express";
import serverless from "serverless-http";

import fetchDetails from "../../server/fetchDetails.js";

const api = express();
const router = Router();

router.get("/:data", async (req, res) => {
  try {
    const { data } = req.params;
    const details = await fetchDetails(data);
    res.send(JSON.stringify(details));
  } catch (_) {
    res.status(500).send("Error getting the details");
  }
});

api.use("/api/", router);

export const handler = serverless(api);
