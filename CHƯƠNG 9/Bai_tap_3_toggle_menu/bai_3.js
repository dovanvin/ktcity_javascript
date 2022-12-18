
let toggle = document.querySelector(".icon-menu") ;
let menu = document.querySelector(".nav-menu");
toggle.addEventListener("click", menuMobile);
function menuMobile() {
 menu.classList.toggle("is-show");
 toggle.classList.toggle("fa-times")
}
