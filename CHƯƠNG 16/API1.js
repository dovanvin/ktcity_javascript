// API là gì ?
// Application Programming Interface
// https://api.github.com/users/evondev
// JSON.parse(data)

const endpoint = "https://api.github.com/users/evondev";

// fetch => là phương thức có sẵn trong js
const promise = fetch(endpoint) ;


promise 
    .then( (response) => {
        return response.json() ;
    })
    .then( (data) => {
        console.log(data);
        console.log(data.login);
        console.log(data.name);
    })
    .catch( (error) => {
        console.log(error);
    })