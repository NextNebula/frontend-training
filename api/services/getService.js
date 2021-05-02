const fetch = require("node-fetch");
const parser = require('fast-xml-parser');
const { htmlToText } = require('html-to-text');
const baseUrl = process.env.DATABASE_URL;
const dbUrl = `${baseUrl}/podcasts`;

async function fetchResults(url) {
  return await fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
}

async function fetchRssResults(url) {
  return await fetch(url).then((response) => {
    if (response.ok) {
      return response.text();
    }
  }).then((data) => {
    return parser.parse(data);
  })
}

async function postResults(url, data) {
  return await fetch(url, 
    {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
}

const searchPodcast = async (query) => await fetchResults(`https://itunes.apple.com/search?entity=podcast&term=${query}`);

const podcastDetails = async (id) => {
  const data = await fetchResults(`https://itunes.apple.com/lookup?id=${id}`);
  const details = data.results[0];
  
  const feed = await fetchRssResults(details.feedUrl);

  return {
    name: details?.collectionName,
    image: details?.artworkUrl600,
    description: htmlToText(feed?.rss?.channel?.description),
  }
};
const createSubscription = async (data) => await postResults(dbUrl, { id: data.id, name: "test" })

module.exports = {
  searchPodcast,
  podcastDetails,
  createSubscription,
}