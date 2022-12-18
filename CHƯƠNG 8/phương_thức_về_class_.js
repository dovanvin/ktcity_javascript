
/************************** CÁC METHOD TRONG CLASS *********************** */

// => Có tất cả 4 method chính trong đó  
// => selector.classList.add("class") :  class là class mới muốn thêm vào
let header = document.querySelector(".header");
header.classList.add("banner");

// => selector.classList.remove("class") : xoá class 
let remove = document.querySelector(".header");
remove.classList.remove("banner");

// => selector.classList.contains("class") : trả về kiều boolean để kiểm tra xem selector đó đã chứa class này chưa 
let demo = document.querySelector(".header");
let demo1 = demo.classList.contains("banner");
console.log(demo1); // false => không

// => selector.classList.toggle("class") : xem xét nếu có class rồi thì xoá đi nếu chưa có thì thêm vào
let selector = document.querySelector(".header");
//--cách 1
if (selector.classList.contains("banner")) {
    selector.classList.remove("banner");
} else {
    selector.classList.add("banner");
}
//--cách 2
selector.classList.toggle("banner");


//------------------------- một số lưu ý --------------------------

// selector.className => công dụng là giúp xem trong selector có bao nhiêu class .Và biến nó thành mảng ( pop , push , shift, unshift v.v.v )

let demo2 = document.querySelector("h1.head");
console.log(demo2.className);
demo2.className = "vinh"  ; // chú ý cách hay







