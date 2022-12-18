
const endpoint = "https://api.github.com/users";
const userEl = document.querySelector(".username");

// fetch => là phương thức có sẵn trong js

// function displayUser( username ) {
//     const promise = fetch(`${endpoint}/${username}`) ;

// promise 
//     .then( (response) => {
//         return response.json() ;
//     })
//     .then( (data) => {
//         console.log(data);
//         console.log(data.login);
//         console.log(data.name);
//     })
//     .catch( (error) => {
//         console.log(error);
//     })
// }

// displayUser("vinh");

async function displayUser( username ) {
    userEl.textContent = "Loading ..." ;
    const promise = await fetch(`${endpoint}/${username}`) ;
    const data = await promise.json() ;
    userEl.textContent = `${data.login}` ;
    console.log("displayUser ~ data", data);
// promise 
//     .then( (response) => {
//         return response.json() ;
//     })
//     .then( (data) => {
//         console.log(data);
//         console.log(data.login);
//         console.log(data.name);
//     })
//     .catch( (error) => {
//         console.log(error);
//     })
}

function handleError() {
    console.log("error");
    userEl.textContent = "No data 404"
}


displayUser("json").catch(handleError) ;