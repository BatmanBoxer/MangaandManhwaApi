import axios from 'axios';
import * as cheerio from 'cheerio';

async function popular() {
  const imageUrls = [];
  const tracker = [];
  try {
    const { data } = await axios.get('https://asuracomic.net/');
    const $ = cheerio.load(data);

    $('#radix-\\:R57pnpja\\:-content-weekly div').each((index, element) => {
      const imageUrl = $(element).find('img').attr('src');
      const link = $(element).find('.w-full.p-0.overflow-hidden span.block a').attr('href');
      const name = $(element).find('.w-full.p-0.overflow-hidden span.block a').text();
      if (imageUrl && !tracker.includes(imageUrl)) {
        tracker.push(imageUrl);
        imageUrls.push({
          name: name,
          link: `https://asuracomic.net/${link}`,
          img: imageUrl,
        });
      }
    });
    return imageUrls;
  } catch (error) {
    return [];
  }
}

export default popular;

