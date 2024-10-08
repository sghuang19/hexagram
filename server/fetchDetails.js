import { load } from "cheerio";

const ICHING_URL = "https://baharna.com/iching/legge";

const nameRegex = /^[\d ]+\. +([a-zA-z ]+?) +\[/;
const lineRegex = /^\w+\. +/; // matches prefix

/**
 * @param {string} id - Hexagram id
 * @returns {Promise<{ summary; judgement; name: any; statements: any[] }>}
 */
export default async function fetchDetails(id) {
  const url = `${ICHING_URL}/${id}.htm`;
  console.log("Fetching details: " + url);
  const fetchRes = await fetch(url);
  const text = await fetchRes.text();
  const $ = load(text);

  const name = $("h3").first().text().match(nameRegex)[1];
  let judgement, summary;
  const statements = [];

  // all of the raw text are in <div class="zhouyi">
  $(".zhouyi").each(function (index, _) {
    let rawText = $(this).text();

    if (index === 0) {
      judgement = rawText; // no processing needed
      return;
    }
    // otherwise, remove the ordered list prefix
    rawText = rawText.replace(lineRegex, "");

    if (index === 7) {
      summary = rawText; // overall summary
    } else {
      statements.push(rawText); // regular line statement
    }
  });

  return { id, name, judgement, statements, summary };
}
