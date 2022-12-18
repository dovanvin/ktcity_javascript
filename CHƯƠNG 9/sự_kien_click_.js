/******************* event ******************* */
// event là sự kiện nó thay đổi khi khi click chuột vào
//------------ selector.addEventListener("1", 2) --------------
/**
 * trong đó :
 * -- "1" là kiểu sự kiện
 * -- 2 là hàm để thay đổi trạng thái sư trỏ chuột
*/
const button = document.createElement("button");
document.body.appendChild(button);
document.body.insertAdjacentElement("afterbegin",button);
button.setAttribute("class", "btn");


// cách sử dụng sự kiện:

//--- cách 1 : hạn chế dùng 
// button.addEventListener("click", function click_Btn() {
//     console.log("click me!");
// })

//--- cách 2 : cách này khuyên nên dùng vì hàm có thể dùng lại được
function click_Button() {
    console.log("click button !");
}
button.addEventListener("click", click_Button);

//------------------------- note(chú ý hiện tương nổi bọt trong event: click) -------------------------

// ví dụ : trong thẻ button còn có thẻ spen .Vậy khi mình tạo sự kiện cho thằng span thì thằng button cũng hiển thị sự kiện
let span = document.createElement("span");
button.appendChild(span) ;
span.textContent = "click me!" ;

span.addEventListener("click", function(e) {
    e.stopImmediatePropagation(); // với hàm stopPropagation() giúp chỉ định click tránh tình trạng nổi bọt
    console.log("click span !");
})

document.body.addEventListener("click", function() {
    console.log("click body!") ;
})

// Vậy trong trường hợp nếu 2 sự kiện span cũng thực hiện thì nên dùng stopImmediatePropagation() ;
// nếu hiện tượng nổi bọt là từ trong ra ngoài (Bubbling) .
// nhưng nếu chúng ta muốn từ ngoài vào trong thì sử dụng (capture: true) viết trong hàmtheo như vậy là nó chày từ ngoài vào trong

//*------------------------------------------------------------
// event.preventDefault() => nhứ event là biến // ví dụ function(event) { event.preventDefault(); }
// công dụng giúp các thẻ a không load sang trang mới theo link trong href mà nó trả ra kết quả như ý mình điều khiển
