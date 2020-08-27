const puppeteer = require("puppeteer");
const fs = require("fs");
const _ = require("lodash");
const wikiUrl = "https://www.tajawal.ae/";
(async () => {
  const graph = {};
  const browser = await puppeteer.launch({ headless: false });
  async function crawler(url = "") {
    if (!url || !url.includes("http")) {
      return null;
    }
    const page = await browser.newPage({ timeout: 0 });

    await page.goto(url, { waitUntil: "load", timeout: 0 });

    const links = await page.evaluate(() => {
      const anchors = document.querySelectorAll("a");
      return Array.from(anchors).map((item) => {
        return item.href;
      });
    });
    page.close();
    return links;
  }

  async function recursive(url = "", lvl = 0) {
    if (!url.includes(wikiUrl) || !url.includes("http") || !url) {
      return null;
    }
    const pageurls = await crawler(url);
    if (pageurls) {
      return [...new Set(pageurls.filter((a) => a))];
    }
    return null;
  }

  graph[wikiUrl] = await recursive(wikiUrl);

  await browser.close();

  fs.writeFileSync("data.json", JSON.stringify(graph), null, 4);
})();
