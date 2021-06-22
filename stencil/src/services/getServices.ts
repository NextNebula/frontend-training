const url = `http://localhost:4000`

export async function getSearchResults(query) {
    return await fetch(`${url}/search/${query}`).then((response) => {
      if (response.ok) {
        return response.json();
      }
    });
}

export async function getSubscriptions() {
  return await fetch(`${url}/subscriptions`).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
}

export async function getPodcastDetails(id) {
  return await fetch(`${url}/podcast/${id}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
}