
//********************  offset  ****************** */
// OFFSET => offsetWidth ; offsetHeight ; offsetLeft ; offsetParent ; offssetTop
/** ví dụ 
 *  h1 { 
 *  width : 200 px ;
 *  height : 200 px ;
 * }
 */
// ---------- selector.offsetTop -------------

const demo = document.querySelector("h1");
console.log(demo.offsetParent); // <body> </body>

// selector.offsetWidth => độ rộng 200px
// selector.offsetHeight => 200px
// selector.offsetLeft => khoảng cách vị trí giữa vật và lề thẻ body phía trái
// selector.offsetTop => khoảng cách vị trí giữa vật và lề thẻ body phía trên
// selector.offsetParent => truy xuất thẻ cha để tính toán 

//******************************** client ***************************** */
// client khá giống vs offset

// selector.clientWidth => độ rộng phần tử nhưng không tính border  
// selector.clientHeight => độ dài phần tử nhưng không tính border
// selector.clientLeft => độ rộng border trái 
// selector.clientTop => độ rộng border trên 

//*********************** WINDOW ************************** */  
// window có thể hiểu là 1 cửa sổ
console.log(window.innerHeight); // chiều cao của body 
console.log(window.outerHeight); // chiều cao của body + search = 100hv + search
console.log(window.innerWidth); // độ rộng của body 
console.log(window.outerWidth); // đọ rộng của body 

//*****************  selector.getBoundingClientRect()  **************** */
// nó là cách viết tắt của của phần offset
console.log(demo.getBoundingClientRect());
// kết quả : nó sẽ trả về ở dạng đối tương object {}
// left, x gống với offsetLefft 
// tương tự mấy cái kia cũng vậy (tự test thử)

