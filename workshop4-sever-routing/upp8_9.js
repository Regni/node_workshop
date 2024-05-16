let fs = require("fs");
let http = require("http");
let url = require("url");

let superheroes = JSON.parse(fs.readFileSync("./data/superheroes.json"));

let superPage = fs.readFileSync("./pages/superheroes.html", "utf-8");
let superCard = fs.readFileSync("./pages/superCard.html", "utf-8");
let superDetail = fs.readFileSync("./pages/heroesDetails.html", "utf-8");

function htmlReplace(template, hero) {
  let result = template
    .replace("{{%superName%}}", hero.superhero)
    .replace("{{%publisher%}}", hero.publisher)
    .replace("{{%superAlias%}}", hero.alter_ego)
    .replace("{{%firstApperance%}}", hero.first_appearance)
    .replace("{{%characters%}}", hero.characters)
    .replace("{{%IDPLACEHOLDER%}}", hero.id)
    .replace("{{%SUPERHERO_BIO%}}", hero.bio)
    .replace("{{%SUPERHERO_POWERS%}}", hero.powers)
    .replace("{{%SUPERHERO_ALLIES%}}", hero.allies)
    .replace("{{%SUPERHERO_ENEMIES%}}", hero.enemies)
    .replace("{{%IMG-ALT-TEXT%}}", hero.superhero);

  return result;
}

let homePage = fs.readFileSync("./pages/index.html");

let aboutPage = fs.readFile("./pages/about.html", (err, data) => {
  if (err) {
    console.error(err);
  }

  aboutPage = data;
});
let servicePage = fs.readFile("./pages/about.html", (err, data) => {
  if (err) {
    console.error(err);
  }

  servicePage = data;
});
let contactPage = fs.readFile("./pages/about.html", (err, data) => {
  if (err) {
    console.error(err);
  }

  contactPage = data;
});

let server = http.createServer((aRequest, aRespons) => {
  let { query, pathname: path } = url.parse(aRequest.url, true);
  //let path = aRequest.url;

  if (path === "/" || path === "/index.html") {
    aRespons.writeHead(200, { "Content-Type": "text/html" });
    aRespons.write(homePage);
    aRespons.end();
  } else if (path === "/about.html") {
    aRespons.writeHead(200, { "Content-Type": "text/html" });
    aRespons.write(aboutPage);
    aRespons.end();
  } else if (path === "/services.html") {
    aRespons.writeHead(200, { "Content-Type": "text/html" });
    aRespons.write(servicePage);
    aRespons.end();
  } else if (path === "/contact.html") {
    aRespons.writeHead(200, { "Content-Type": "text/html" });
    aRespons.write(contactPage);
    aRespons.end();
  } else if (path === "/superheroes") {
    if (!query.id) {
      let htmlHeroCards = superheroes.map((hero) => {
        return htmlReplace(superCard, hero);
      });

      aRespons.writeHead(200, { "content-Type": "text/html" });
      aRespons.write(
        superPage.replace("{{%CONTENT%}}", htmlHeroCards.join(""))
      );
      aRespons.end();
    } else {
      let hero = superheroes[query.id];
      let superDetailHtml = htmlReplace(superDetail, hero);
      aRespons.write(superPage.replace("{{%CONTENT%}}", superDetailHtml));
      aRespons.end();
    }
  } else if (path === "/superheroesdata") {
    aRespons.writeHead(200, { "content-Type": "application/json" });
    aRespons.write(JSON.stringify(superheroes));
    aRespons.end();
  } else {
    aRespons.writeHead(404, { "Content-Type": "text/plain" });
    aRespons.write("page not found!");
    aRespons.end();
  }
});

server.listen(8000, "localhost", () => {
  console.log("server started");
});
