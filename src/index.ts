import 'dotenv/config'; // To use our .env
import fetch from 'node-fetch'; // pure esm lib

async function main () {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  console.log(data)
  console.log("Envrionment variable", process.env.MY_VARIABLE);
}

main();
