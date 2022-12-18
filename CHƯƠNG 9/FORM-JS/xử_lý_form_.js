
let form = document.querySelector("form") ;

form.addEventListener("submit", formSubmit);
function formSubmit(event) {
    event.preventDefault();
    // this
    // event.target
    console.log(this);

    const search = this.elements["search"].value ;
    const gender = this.elements["gender"].value ;
    console.log(search ,gender);
    // phần checkbox vì nó có chọn đc nhiều cái nên phải làm cách khác 
    const hobby = document.querySelectorAll(`input[name="hobby"]`);
    let hobbyValue = [] ;
    [...hobby].forEach( item => hobbyValue.push( item.value )) ;
    console.log(hobbyValue);
    
};
