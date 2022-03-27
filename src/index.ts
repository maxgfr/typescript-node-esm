import 'dotenv/config'; // To use our .env
import fetch from 'node-fetch'; // pure esm lib
import { sayHello } from './hello';

async function main () {
  sayHello();
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  console.log(data)
}

main();
