const fetch = require("node-fetch");
const baseUrl = process.env.DATABASE_URL;
const dbUrl = `${baseUrl}/podcasts`;

async function fetchResults(url) {
  return await fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
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
const podcastDetails = async (id) => await fetchResults(`https://itunes.apple.com/lookup?id=${id}`);
const createSubscription = async (data) => await postResults(dbUrl, { id: data.id, name: "test" })

module.exports = {
  searchPodcast,
  podcastDetails,
  createSubscription,
}