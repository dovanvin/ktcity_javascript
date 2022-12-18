
/**************** Dùng Dom để tuỳ chỉnh text trong js  **************** */

//------------------- selecter.textContent = "text" -------------------
//=> dùng để thay đổi thêm sửa xoá trong text
let demo = document.querySelector("p");
console.log(demo.textContent);

console.log(`------------------ innerText--------------`);
//--------------------------selector.innerText = "text"----------------------------
let demo1 = document.querySelector("p") ;
demo1.innerText 
console.log(demo1.innerText);

console.log(`-----------------innerHTML-----------------`);
//-----------------------selector.innerHTML = "text"---------------------------
let demo2 = document.querySelector("p") ;
demo2.innerHTML = '<div style="color:yellow" > in ra vừa text và HTML </div>'  ;

//****************** Cách Truy Xuất ******************** */ 
// cách lấy phần tử cha của 1 node hay 1 element nào đó // selector.parentNode // selector.parentElement
let span = document.querySelector("span") ;
let a = span.parentNode ; // gọi đc thẻ tag cha và nếu không phát hiện cha thì nó lấy element của chính nó
console.log(a);

//-------------- cách xoá 1 element -------------- => truy xuất element cha xong rồi xoá thằng con
// 
let b = span.parentElement;// truy xuất thằng cha và nếu không phát hiện đc tag cha sẽ trả về giá trị null
b.removeChild(span) ; // xoá phần tử con trong cha
// cách 2 : b.remove(span) ; vs cách này không hỗ trợ trình duyệt cũ 


//*************** cách thay thế element và nội dung *************** */
//-- note.replaceChild(element 1, element 2 );
/**
 * trong đó :
 * note là phần tử cha (để thay element con của nó)
 * element1 là element cần thay thế
 * element2 là element bị thay thế
 */

