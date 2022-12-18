/*************** selector.getAttribute("attribute")  ****************** */

// Attribute : nó là nhưng thuộc tính hỗ trợ trong html => href , src , style , border , class , id , v.v...

//--------------------- GET -------------------------
// selector.getAttribute("attribute") => trỏ vào 1 lần duy nhất thôi 

// const demo = href.getAttribute("href");
//-- đây là truy xuất thuộc tính 1 lần (các thẻ hay là id )
let a = document.querySelector("a"); // triết xuất selector 
let demo = a.getAttribute("href"); // triết xuất thuộc tính 
console.log(demo); 

//-- truy xuât nhiều lần như class 
let li = document.querySelectorAll(".item")  ; // truy xuất selector 
li.forEach ( (item) => {
    console.log(item.getAttribute("class"));
});
console.log(li);


//-------------------- SET ---------------------
// xét có 1 cái thôi
let b = document.querySelector("a");
let demo1 = b.setAttribute("target", "_blank"); // selector.setAttribute("selector", "value")

// xét nhiều cái 
let c = document.querySelectorAll("a.link");
c.forEach ((item) => item.setAttribute("target", "_blank") );


//--------------------- selector.removeAttibute("attribute") -------------------------
// công dụng là xoá đi một cái gì đó 
let demo2 = document.querySelector("p") ; // truy xuất selector
demo2.removeAttribute("style") ;
//-- xoá nhiều phần 
let demo3 = document.querySelectorAll("li") ; // truy xuất selector
demo3.forEach ((item) => item.removeAttribute("style"));

//---------------------- selector.hasAttribute("attribute")--------------------------
// nó trả ra kết quả giống boolean .Nhằm mục đính để xét xem trong selector có cái attribute đấy chưa 

let demo4 = document.querySelector("a.link") ;
let demo5 = demo4.hasAttribute("border");
if ( demo5 ) {
    console.log(demo5);
}



