
/********************** Cách khởi tạo 1 element mới  ******************** */
// Để khởi element gồm 2 bước :
// => element : là các thẻ tag trong HTML
//--bước 1 : ----- document.createElement("element")------------
// let demo = document.createElement("hr");
// console.log(demo); // bước này khởi tạo
//--bước 2 : ------ selector.appendChild(element)------------
// let demo1 = document.body ;
// demo1.appendChild(demo); // hiển thị vào HTML

/****************** Bài tập **************** */

let body = document.querySelector("body");
//--header
let header = document.createElement("header");
body.appendChild(header);
let headerAttribute = document.querySelector("header");
header.className = "header" ; 
header.setAttribute("id", "header") ;
//--logo
let logo = document.createElement("div");
headerAttribute.appendChild(logo);
logo.className = "logo" ;
logo.innerHTML = "<div>LOGO</div>" ;
//--nav
let nav = document.createElement("nav");
headerAttribute.appendChild(nav);
nav.className = "menu" ;
let nav_ul = document.createElement("ul");
nav.appendChild(nav_ul);
let nav_ul_li = document.createElement("li");
nav_ul.appendChild(nav_ul_li);

/********************** selector.createTextNode ******************** */
// công dụng là thêm text vào
let div = document.createElement("div");
body.appendChild(div);
div.className = "text_box" ;
let h1 = document.createElement("h1");
div.appendChild(h1);
let text_h1 = document.createTextNode("xin chào");
h1.appendChild(text_h1); 

/**************************** element.cloneNode() ****************************** */
// ví dụ mình sẽ sao chép h1 ở trên phần createTextNode
let h1Clone = h1.cloneNode() ;
body.appendChild(h1Clone); // sao chép mình thẻ h1 thôi
let text2 = document.createTextNode("xin chào 2");
h1Clone.appendChild(text2); // cách chèn nội dung mới vào
//---------------------
let h1Clone1 = h1.cloneNode(true) ;
body.appendChild(h1Clone1); // sao chép cả thẻ h1 và nội dung text luôn

/************************** hasChildNotes() *********************** */
// dùng để check điều kiện xem là cái element đó đã có 1 Cái Node con nào hay chưa 
let h3 = document.createElement("h3") ;
body.appendChild(h3);
console.log(h3.hasChildNodes()); // false vì trong thẻ h3 ko có node con nào cả






