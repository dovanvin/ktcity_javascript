
/************** cách truy xuất các thẻ element gần kề *************/

//***** */ truy xuất liền kề phía dưới -- selector.nextElementSibling
let span = document.querySelector("span.span");
let nextSpan = span.nextElementSibling;
console.log(nextSpan);

//***** */ truy xuất liền kề phía trên -- selector.previousElementSibling
let prevSpan = span.previousElementSibling;
console.log(prevSpan);

//***** */ truy xuất các node bên trong phần tử cha
//-- childNodes => truy xuất các node element và cả textNode
console.log(span.childNodes); // text <strong></strong> text
//-- children => truy xuất các node element
console.log(span.children); // strong

//***** */ truy xuất text và element
//-- firstchild
console.log(span.firstChild); // text
//-- firstElementChild
console.log(span.firstElementChild); // strong

//**** */ lastChild & lastElementChild
console.log(span.lastChild);  // text
console.log(span.lastElementChild); // strong



