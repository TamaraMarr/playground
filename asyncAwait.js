async function getReq() {
    return await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            return response.json();
        })
}

let posts;

getReq().then(response => posts = response);