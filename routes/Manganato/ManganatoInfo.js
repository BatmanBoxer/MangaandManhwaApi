import axios from "axios";
import * as cheerio from "cheerio";

const fetchMangaInfo = async (url) => {
  let MangaInfo = {};

  try {
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);

    const title = $(".story-info-right h1").text().trim();
    MangaInfo.title = title;

    const imgSrc = $(
      "body > div.body-site > div.container.container-main > div.container-main-left > div.panel-story-info > div.story-info-left > span.info-image > img",
    ).attr("src");
    MangaInfo.img = imgSrc;

    MangaInfo.genres = [];
    const lastTable = $(".variations-tableInfo").last();
    lastTable.find("tr").each((index, element) => {
      const genreText = $(element).find(".table-value").text().trim();
      if (index === 3) {
        MangaInfo.genres = genreText.split(" - ").map((genre) => genre.trim());
      }
    });

    const rating = $(
      "#rate_row_cmd > em > em:nth-child(2) > em > em:nth-child(1)",
    )
      .text()
      .trim();
    MangaInfo.rating = rating;

    const description = $("#panel-story-info-description").text().trim();
    MangaInfo.description = description;

    MangaInfo.chapters = [];
    $(".chapter-name.text-nowrap").each((index, element) => {
      const chapterUrl = $(element).attr("href");
      const chaptetTitle = $(element).text().trim();
      MangaInfo.chapters.push({ url: chapterUrl, title: chaptetTitle});
    });

    return MangaInfo;
  } catch (error) {
    return { error: `Server Error: ${error.message}` };
  }
};

export default fetchMangaInfo;
