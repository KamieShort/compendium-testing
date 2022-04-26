export async function fetchQuotes() {
  const resp = await fetch('https://futuramaapi.herokuapp.com/api/quotes/');
  const data = await resp.json();
  return data;
}
