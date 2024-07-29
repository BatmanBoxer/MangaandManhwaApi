import axios from "axios";
import * as cheerio from "cheerio";

const fetchMangaSearch = async (name) => {
  const MangaSearch = [];
  try {
    const response = await axios.get(
      `https://manganato.com/search/story/${name}`,
    );
    const html = response.data;
    const $ = cheerio.load(html);

    const mangaList = $(".search-story-item");
    mangaList.each((index, element) => {
      const img = $(element).find("img").attr("src");
      const title = $(element).find(".item-title").text().trim();
      const link = $(element).find(".item-title").attr("href")
      MangaSearch.push({
        id: index + 1,
        title:title,
        img: img,
        link:link,
      });
    });

    return MangaSearch;
  } catch (error) {
    return { error: "Server Error Contact Darwin because of " + error };
  }
};

export default fetchMangaSearch;
