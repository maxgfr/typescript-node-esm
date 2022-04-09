import 'dotenv/config'; // To use our .env
import { fetchData } from './fetch';
import { sayHello } from './hello';

async function main () {
  sayHello();
  fetchData()
}

main();
