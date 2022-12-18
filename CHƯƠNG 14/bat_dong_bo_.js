
//************************* ĐỒNG BỘ VÀ BẤT ĐỒNG BỘ ***********************/

// Đồng bộ là gì ? => đồng bộ là sự hoạt động theo quy luật từ trên xuống dưới ( có trình tự )
// Bất đồng bộ là gì ? => là không đồng bộ là sự hoạt đông không theo quy luật ( không có trình tự )
// ví dụ :
function text() {
    setTimeout( () => console.log("1"), 1000) ;
    console.log("2"); 
    console.log("3");
    // kết quả trả về v\là 2 // 3 // 1
    // đó dù 1 đướng đầu nhưng nó vẫn bị trả xuống cuối do nó chạy lâu hơn nên bị bất đồng bộ
}
text() ;

// Bất đồng bộ giúp chúng ta thực hiện được nhiều tác vụ cùng một lúc .Mà không phải chờ đợi theo tình tự nhất định

// Để hiều sâu đc về bất đồng bộ thì chúng ta cần biết 
// -1 => Browser API / Web API => setTimeout(), setInterval(), ...// hoặc là về sự kiện event , click , scroll, ...
// -2 => Promises => các đối tượng js để thực hiện 1 số đối tượng tác vụ


