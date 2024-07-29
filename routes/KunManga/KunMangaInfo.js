import axios from "axios";
import * as cheerio from "cheerio";

const fetchMangaInfo = async (url) => {
  let MangaInfo = {};
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const title = $(".post-title").text().trim();
    MangaInfo.title = title;

    const imgSrc = $(".summary_image img").attr("src");
    MangaInfo.img = imgSrc;

    MangaInfo.genres = [];
    $(".genres-content").each((index, element) => {
      const genre = $(element).text().trim();
      MangaInfo.genres.push(genre);
    });

    const rating = $("#averagerate").text().trim();
    MangaInfo.rating = rating;

    const description = $(".description-summary").text().trim();
    MangaInfo.description = description;

    MangaInfo.chapters = [];
    $(".wp-manga-chapter").each((index, element) => {
      const chapterUrl = $(element).find("a").attr("href");
      const chapterTitle = $(element).find("a").text().trim();
      MangaInfo.chapters.push({ url: chapterUrl, title: chapterTitle });
    });

    return MangaInfo;
  } catch (error) {
    return { error: "Server Error Contact Darwin" };
  }
};

export default fetchMangaInfo;

// Extract chapters
