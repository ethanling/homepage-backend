const request = require("request-promise-native");
const cheerio = require("cheerio");

let scrape = function() {
    let article = {};
    return request("http://news.ycombinator.com").then(response => {
        let $ = cheerio.load(response);

        let link = $("a.storylink").attr("href");
        let title = $("td")
            .children()
            .find("a.storylink")
            .html();

        article = {
            title: title,
            link: link
        };
        return article;
    });
}

module.exports = scrape;
