const url = `${process.env.REACT_APP_API_BASE_URL}`

export async function getSearch(query) {
  const result = await fetch(`${url}/search/${query}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });

  return result;
}

export async function getPodcastDetails(id) {
  const result = await fetch(`${url}/podcast/${id}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });

  return result;
}

export async function postSubscription(id) {
  const result = await fetch(`${url}/subscribe`, {
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id})
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });

  return result;
}