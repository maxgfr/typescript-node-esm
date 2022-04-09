import fetch from 'node-fetch'; // pure esm lib

export async function fetchData() {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  console.log(data)
}