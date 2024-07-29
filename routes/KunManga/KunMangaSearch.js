import axios from "axios";
import * as cheerio from "cheerio";

const fetchMangaSearch = async (name) => {
  const MangaSearch = [];
  try {
    const response = await axios.get(
      `https://kunmanga.com/?s=${name}&post_type=wp-manga`,
    );
    const html = response.data;
    const $ = cheerio.load(html);
    const mangaList = $("div.row.c-tabs-item__content");

    mangaList.each((index, element) => {
      const img = $(element).find("img").attr("src");
      const title = $(element).find("div.post-title").text().trim();
      const link = $(element).find("div.post-title a").attr("href");
      
      MangaSearch.push({
        id: index + 1,
        title: title,
        img: img,
        link: link,
      });
    });

    return MangaSearch.length > 0 ? MangaSearch : { error: "No manga found" };
  } catch (error) {
    return { error: "Server Error Contact Darwin" };
  }
};

export default fetchMangaSearch;
