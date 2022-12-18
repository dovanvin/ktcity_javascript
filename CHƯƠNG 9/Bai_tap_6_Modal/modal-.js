
let modal = document.querySelector(".modal-button");

modal.addEventListener("click", modalClick);
function modalClick(event) {
    event.target.parentNode.parentNode.parentNode.classList.add("is-modalNo");
}

let modalContainer = document.querySelector(".modal-container") ;

if (modalContainer) {
    setTimeout( function() {
        modalContainer.classList.add("is-modal");
    }, 4000);
}