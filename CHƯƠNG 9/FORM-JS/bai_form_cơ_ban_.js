
let form = document.querySelector(".form");

form.addEventListener("submit", formSubmit);
function formSubmit(event) {
    event.preventDefault() ;
    // event.target
    // this
    const search = this.elements["search"].value ;
    if (!search) {
        alert("làm ơn nhập giá trị");
        return ;
    }
    const password = this.elements["password"].value ;
    if (!password ) {
        alert("làm ơn nhập lại ");
        return ;
    }
    if ( password.length <= 6) alert("nhaapj lại");
    console.log(search , password);
}