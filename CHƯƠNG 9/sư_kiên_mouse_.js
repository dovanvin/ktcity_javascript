
//************** EVENT MOUSE *************** */
// mouse : có nghĩa là con chuột mà đây là sự kiện thì là con trỏ chuột 
/**
 * mousemove => di chuyển chuột là sự kiện sẽ xãy ra
 * mouseover => di chuột vào button nó cũng chạy và span nó cũng chạy 
 * mouseenter => di chuyển vào trong nút chỉ chạy 1 lần có bao nhiêu thằng con trong button không quan trong
 * mouseleave =>  ngược lại với mouseenter là chạy 1 lần khi di chuyển ra ngoài button
 */
/*
<button class="btn">
    <span>click me!</span>
</button>
*/

//****************** Client & Page ********************* */

// clientX và clientY là lấy toạ độ theo viewport
// pageX và pageY là lấy toạ độ theo document
// clientX và pageX thường bằng nhau vì viewport và document chiều toạ độ X ko hay thay đổi

document.addEventListener("mousemove", function(event) {
    console.log(event.pageY);
    console.log(event.clientY);
})
