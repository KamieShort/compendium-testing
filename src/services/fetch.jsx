export async function fetchQuotes(search) {
  const url = search
    ? `https://futuramaapi.herokuapp.com/api/quotes?search=${encodeURIComponent(
        search
      )}`
    : 'https://futuramaapi.herokuapp.com/api/quotes/';
  const resp = await fetch(url);

  const data = await resp.json();
  return data;
}
// str.replace(' ', '-').toLowerCase()
