import express, { Router } from "express";
import serverless from "serverless-http";

import fetchDetails from "../../server/fetchDetails.js";

const api = express();
const router = Router();

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const details = await fetchDetails(id);
    res.send(JSON.stringify(details));
  } catch (_) {
    res.status(500).send("Error getting the details");
  }
});

api.use("/api/", router);

export const handler = serverless(api);
