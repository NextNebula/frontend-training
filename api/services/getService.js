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

async function deleteResults(url) {
  return await fetch(url, 
    {
      method: "delete"
    });
}

const searchPodcast = async (query) => {
  const data = await fetchResults(`https://itunes.apple.com/search?entity=podcast&term=${query}`)
  return data.results.map(details => {
    return {
      id: details?.trackId,
      name: details?.collectionName,
      image: details?.artworkUrl600,
    }
  }); 
};

const getItunesDetails = async (id) => await fetchResults(`https://itunes.apple.com/lookup?id=${id}`);
const getDatabaseDetails = async (id) => await fetchResults(`${dbUrl}/${id}`);

const podcastDetails = async (id) => {
  const itunesDetailsData = await getItunesDetails(id);
  const itunesDetails = itunesDetailsData.results[0];
  const dbDetails = await getDatabaseDetails(id);
  
  let feed = null;
  if (itunesDetails.feedUrl) {
    feed = await fetchRssResults(itunesDetails.feedUrl);
  }

  const episodes = feed?.rss.channel.item.map(_ => { return { title: _.title }})

  return {
    name: itunesDetails?.collectionName,
    image: itunesDetails?.artworkUrl600,
    description: htmlToText(feed?.rss?.channel?.description),
    isSubscribed: !!dbDetails,
    episodes
  }
};

const createSubscription = async (id) => {
  const itunesDetailsData = await getItunesDetails(id);
  const itunesDetails = itunesDetailsData.results[0];

  await postResults(dbUrl, { 
    id: id,
    name: itunesDetails?.collectionName,
    image: itunesDetails?.artworkUrl600
  });
}

const deleteSubscription = async (id) => await deleteResults(`${dbUrl}/${id}`)

const getSubscriptions = async () => await fetchResults(dbUrl);

module.exports = {
  searchPodcast,
  podcastDetails,
  createSubscription,
  getSubscriptions,
  deleteSubscription
}