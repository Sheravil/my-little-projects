import axios from "axios";
// import fetch from "node-fetch"


async function newFunc (Number) {
    const {data: user} = await axios(`https://jsonplaceholder.typicode.com/users/${Number}`);
    const {data: post} = await axios(`https://jsonplaceholder.typicode.com/posts?id=${Number}`)
    console.log("user", user);
    console.log("post", post);
}
newFunc(1)
