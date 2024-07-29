import axios from "axios";
import * as cheerio from "cheerio";

const fetchMangaInfo = async (url) => {
  let MangaInfo = [];

  try {
    const response = await axios.ger(url);
    const html = response.data;

    const $ = cheerio.load(html);

    const title = $(".story-info-right h1").text().trim();
    MangaInfo.title = { title: title };

  } catch (error) {
    return { error: "Server Error Contact Darwin" };
  }
};
