// import slugify from 'slugify';
// // var Slugify = require('slugify');
// import { cikar, Topla } from './my-module.js';

// const test = slugify("lorem ipsum dolar", "*");

// console.log(test);

// console.log(Topla(5, 6));
// console.log(cikar(6, 5));

// import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users) => {
//         console.log(users);
//     })

// async function getData() {
//     const data = await fetch("https://jsonplaceholder.typicode.com/posts/1").json()

//     console.log("user data 1", data);
// }

// getData();

import getData from "./odev.js";


console.log(getData(5));