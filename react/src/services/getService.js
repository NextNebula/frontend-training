const url = `${process.env.REACT_APP_API_BASE_URL}`

export async function getSearch(query) {
  return await fetch(`${url}/search/${query}`).then((response) => {
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

export async function postSubscribe(id) {
  return await fetch(`${url}/subscribe/${id}`, {
    method: "post",
  });
}

export async function postUnsubscribe(id) {
  return await fetch(`${url}/unsubscribe/${id}`, {
    method: "post",
  });
}

export async function getSubscriptions() {
  return await fetch(`${url}/subscriptions`).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
}