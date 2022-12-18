// scope : nghĩa là phạm vi của biến đó mà chúng ta có thể truy cập đến được

// scope có 2 phạm vi đó " global scope " &  " function scope" .

// global scope là dùng đâu cũng được
// function scope là dùng được mỗi trong cái hàm mà mình khai báo.

let name = "Đỗ Đạt" ; // global scope
function myDemo() {
    let name2 =  " Trọng Tấn " ; // function scope
    console.log(name2);
}
myDemo();

//**************************** BUỔI 4 */
// block scope &  var

if (2>1) {
    let ketqua = "đúng" ;  // đây đc xem là block scope .Vì let đc khai báo trong { }
    console.log(ketqua);
}

// nếu viết như dưới đây thì không được xem là block scope
let kq = ""; // vì nó khai báo ngoài {} nên không được gọi block scope 
if (2>1){
    kq = "true";
}
console.log(kq);

// còn trường hợp với var thì nó global scope & hoisting ==> nên viết trong hay viêt ngoài {} không ảnh hưởng
// => đó là lý do không nên dùng var .Vì rất khó kiểm soát.
