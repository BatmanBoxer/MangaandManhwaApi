import express from "express";
import ManganatoSearch from "./ManganatoSearch.js";

const route = express.Router();

route.get("/", async (req, res) => {
  if (req.query.name) {
    console.log(`The manga to search is ${req.query.name}`);
    try {
      const result = await ManganatoSearch(req.query.name);
      return res.send(result);
    } catch (error) {
      console.error("Error during manga search:", error);
      return res.status(500).send({ error: "Internal Server Error" });
    }
  }
  
  if(req.query.url)


  res.status(400).send({ error: "Invalid Query" });
});

export default route;
