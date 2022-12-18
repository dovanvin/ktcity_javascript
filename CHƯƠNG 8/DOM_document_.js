
/*************** Document trong DOM ************* */
//document object model 
/** 5 documents
 * document.querySelector 
 * document.querySelectorAll
 * document.getElementsByClassName
 * document.getElementsByTagName
 * document.getElementById 
 */
/** chú ý nhưng cách viết tắt mà ko cần querySelector như các selector và element sau : html , body , title , head
 *  html => document.documentElement
 *  body => document.body
 *  head => document.head
 *  title => document.title
 */
// selecter : nó chính là các cái ở CSS => h1 , .container, p, #header

//-------------- document.querySelector("selector") --------------- => hiện ra 1 nút
const demo = document.querySelector("h1") ;
console.log(demo);
const demo2 = document.querySelector(".header");
console.log(demo2);
const demo3 = document.querySelector(".header .logo");
console.log(demo3);
//---------------- document.querySelectorAll("selector") ------------ => hiện ra nhiều nút
const demo4 = document.querySelectorAll(".item");
console.log(demo4); // NodeList(4) [li.item, li.item, li.item, li.item]
// ví dụ sử dụng for
console.log(`---------------------`);
for (let i=0 ; i < demo4.length ; i++) {
    console.log(demo4[i]);//
}
//=> gần giống mảng vì nó có thể loop như forEach .Nhưng ko thể dùng method để thêm xoá sữa v.v..

//----------------- document.getElementsByClassName("class") -------------------
console.log(`--------------------------`);
let demo5 = document.getElementsByClassName("item");
console.log(demo5);
//----------------- document.getElementsByTagName("class") -------------------
console.log(`--------------------------`);
let demo6 = document.getElementsByTagName("h1"); 
console.log(demo6); //HTMLcollection :  nó trả ra kết quả giống mảng nhưng không sử dụng đc forEach

//----------------- document.getElementById("id") --------------------
// tương tự như trên khi truy xuất ra kết quả như document.querySelector(".class");


/**
 * Như ở trên nào là TagName và id và class và querySelectorAll nhưng chúng để trả về HTMLcollection và nodeList
 * Tuy nhìn chúng trả về kết quả khá giống mảng nhưng lại không sử dụng được đầy đủ các chức năng của mảng 
 * Vì vậy chúng ta cần chuyển sang mảng 
 * 
 * có 2 cách để chuyển :
 * --1 array.form(HTMLcollection & nodeList)
 * --2 [...HTMlcollection] và [...nodeList]
 */
// ví dụ :
const node = document.querySelectorAll("li"); // trả ra nodeList
[...li].forEach( (item) => item) ;

