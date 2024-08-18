import express from "express";
import ManganatoSearch from "./ManganatoSearch.js";
import ManganatoInfo from "./ManganatoInfo.js";
import ManganatoImage from "./ManganatoImage.js";

const route = express.Router();

route.get("/", async (req, res) => {
  if (req.query.name) {
    try {
      const result = await ManganatoSearch(req.query.name);
      return res.send(result);
    } catch (error) {
      console.error("Error during manga search:", error);
      return res.status(500).send({ error: "Internal Server Error" });
    }
  }

  if (req.query.info) {
    try {
      const reasult = await ManganatoInfo(req.query.info);
      return res.send(reasult);
    } catch (error) {
      return res.status(500).send({ error: "Internal Server Error" });
    }
  }
  if (req.query.image) {
    try {
      const reasult = await ManganatoImage(req.query.image);
      return res.send(reasult);
    } catch (error) {
      return res.status(500).send({ error: "Internal Server Error" });
    }
  }

  res.status(400).send({ error: "Invalid Query" });
});

export default route;
