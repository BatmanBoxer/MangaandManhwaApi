import axios from "axios";
import * as cheerio from "cheerio";

const fetchMangaImage = async (url) => {
  const MangaImage = [];
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const mangaList = $(".container-chapter-reader img");
    mangaList.each((index, element) => {
      const img = $(element).attr("src").trim();
      MangaImage.push({
        id: index + 1,
        img: img,
      });
    });
    return MangaImage.length > 0 ? MangaImage : { error: "No Images found" };
  } catch (error) {
    return { error: "Server Error Contact Darwin" };
  }
};
export default fetchMangaImage;
