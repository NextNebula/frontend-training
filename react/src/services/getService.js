const url = `${process.env.REACT_APP_API_BASE_URL}`
// export async function getAll() {
//   const result = await fetch(url).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//   });

//   return result;
// }

// export async function getById(id) {
//   const result = await fetch(`${url}/${id}`).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//   });

//   return result;
// }

// export async function getByCategory(category) {
//   const result = await fetch(`${url}/${category}`).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//   });

//   return result;
// }

export async function getSearch() {
  const result = await fetch(`${url}/search/`).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });

  return result;
}