// function topla(a, b) {
//     return a + b;
// }
// const topla = (a, b) => a + b;
// const hello = () => {
//     console.log("hello");
// }
// export { topla, hello };

// async function Func() {
//     const result = await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json()
//     console.log(result);
// }

// console.log(Func());

// export default Func;

import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users) => {
//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//             .then((data) => data.json())
//             .then((posts) => console.log(posts))
//     })


// async function getData() {
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json()


//     const posts1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
//     const posts2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json()

//     console.log(users);
//     console.log(posts1);
//     console.log(posts2);
// }

// getData()

// (async() => {
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json()


//     const posts1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
//     const posts2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json()

//     console.log(users);
//     console.log(posts1);
//     console.log(posts2);
// })();