// bước 1 : truy xuất dom
let jokeButton = document.querySelector(".joke-button");
let jokeHeading = document.querySelector(".joke-heading");
let joke = document.querySelector(".joke");
// bước 2
const endpoint = "https://icanhazdadjoke.com/";
// bước 3 : async await
async function getJoke() {
    const promise = await fetch(endpoint, {
        headers: {
            Accept: "application/json" ,
        }
    }) ;
    const data = await promise.json();
    return data;
}
function handleError() {
    jokeHeading.textContent = "ERROR 404" ;
}

// bước 4
async function handleClick() {
    joke.classList.add("loading");
    const data = await getJoke() ;
    jokeHeading.textContent = data.joke ;
    console.log(jokeHeading);
    joke.classList.remove("loading");
}

jokeButton.addEventListener("click", handleClick);

getJoke().catch(handleError) ;