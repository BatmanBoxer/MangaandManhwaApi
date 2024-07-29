import express from "express";
import KunMangaSearch from "./KunMangaSearch.js";
import KunMangaInfo from "./KunMangaInfo.js";
import KunMangaImage from "./KunMangaImage.js";
const route = express.Router();

route.get("/", async (req, res) => {
  if (req.query.name) {
    console.log(`The manga to search is ${req.query.name}`);
    const result = await KunMangaSearch(req.query.name);
    return res.send(result);
  }
  if (req.query.info) {
    console.log(`The manga to search is ${req.query.info}`);
    const result = await KunMangaInfo(req.query.info);
    return res.send(result);
  }
  if (req.query.image) {
    console.log(`The manga to search is ${req.query.image}`);
    const result = await KunMangaImage(req.query.image);
    return res.send(result);
  }
  res.send({ error: "Invalid Query" });
});

export default route;
