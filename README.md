Api For Easy Acess To Manga and Manhwa


How to setup:
-git clone https://github.com/BatmanBoxer/MangaandManhwaApi 
-just go to that folder 
-npm install
-npm start 

How to use:
There are two end points . both are diffrent servers aka scrapers of diffrent sites
                                                  
-if your running locally 
--To Search Manga 
localhost:1000/manganato?name={manganame}
example = http://localhost:1000/manganato?name=naruto
--To Get Info on Manga
localhost:1000/manganato/?info={link which you get from search}
example = http://localhost:1000/manganato?info=https://chapmanganato.to/manga-ng952689
--To Get images of chapter
localhost:1000/manganato/?image={link which you get from info}
example = http://localhost:1000/manganato?image=https://chapmanganato.to/manga-ng952689/chapter-700.5

That was all for mangas if you want manhwa just replace the manganato to kunmanga.like
http://localhost:1000/kunmanga?name=solo+leveling
http://localhost:1000/kunmanga?info=https://kunmanga.com/manga/solo-leveling-ragnarok/
http://localhost:1000/kunmanga?image=https://kunmanga.com/manga/solo-leveling-ragnarok/chapter-0/

Btw the image may not load from the url cause of the security of the website but its a shit security so i have another api to bypass that just check it out
