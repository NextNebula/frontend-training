const url = `http://localhost:4000`

export async function getSearchResults(query) {
    return await fetch(`${url}/search/${query}`).then((response) => {
      if (response.ok) {
        return response.json();
      }
    });
}