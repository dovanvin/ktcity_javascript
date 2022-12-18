


let header = document.querySelectorAll(".accordion-header");
let content = document.querySelectorAll(".accordion-content");

header.forEach( item => item.addEventListener("click", headerClick));
function headerClick(event) {
    //----- header nhấn đổi icon
    let icon = event.target.querySelectorAll(".icon");
    icon.forEach( item => item.classList.toggle("fa-angle-up"));

    //----- liện kết nội dung
    // dùng nextElementSibling để liên kết giữa header và content
    let content = event.target.nextElementSibling ;
    content.style.height = `${content.scrollHeight}px`;  // bình thường thì chiều cao = css
    content.classList.toggle("is-active"); //để lức có lúc ko 
    if (!content.classList.contains("is-active")) { // nếu ko có thì height = 0 px
        content.style.height = `0px`;
    }

    
    
}






