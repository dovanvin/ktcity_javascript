/*
<div class="modal-container">
        <div class="modal">
            <div class="modal-button">
                <i class="fas fa-times"></i>
            </div>
            <div class="modal-content">
                <div class="modal-content-inner">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt non rerum iste laboriosam, dicta at
                    aliquam quasi ipsa cumque a odit repudiandae laborum quis, quas, omnis veniam ad ex labore.
                </div>
            </div>
        </div>
    </div>
*/

let button = document.querySelector("button");
let btnModal = `
    <div class="modal-container">
        <div class="modal">
            <div class="modal-button">
                <i class="fas fa-times"></i>
            </div>
            <div class="modal-content">
                <div class="modal-content-inner">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt non rerum iste laboriosam, dicta at
                    aliquam quasi ipsa cumque a odit repudiandae laborum quis, quas, omnis veniam ad ex labore.
                </div>
            </div>
        </div>
    </div>
` ;
button.addEventListener("click", buttonClick);
function buttonClick() {
 document.body.insertAdjacentHTML("afterbegin", btnModal);
}

document.body.addEventListener("click", closeClick);
function closeClick(event) {
    
    event.target.classList.add("close");
}