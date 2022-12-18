
// Câu trả lời ở đây ? Mảng là gì ?
// Mảng gọi là array 
// Mảng là một biết đặc biệt có thể lưu được nhiều phần tử 
/* Trong đó :
- phần tử là các giá trị thuộc loại nhiều kiểu dữ liệu khác nhau
- boolear , number , string , undefined , null 
*/

/*
Mảng có có hai cách tạo : 
- const myDemo = [0 , "string" . false , undefined , [number , "string", true] , null ,];
- const myDemo = new Array("string" . false , undefined )
*/ 

// [] : empty array -> mảng rỗng ;
/*
 index : vị trí của các phần tử trong mạng (lấy duyệt bắt đầu từ số 0);
 ví dụ : const myDemo = ["tuấn", "an", "hoà", "hiệp"]; => "tuấn" phần tử đầu tiên có giá trị index = 0
*/
// length : độ dài của mảng => nó đếm độ dài của mảng

/* 
truy suất mảng : công thức : tên_biến[index];
 ví dụ : let hoTen = myDemo[0];
*/
const myDemo = ["tuấn", "an", "hoà", "hiệp"]; 
console.log(myDemo[0]);
console.log(myDemo[1]);
console.log(myDemo[2]);
console.log(myDemo[myDemo.length -1]); // truý suất ví trí cuối cùng

/*
truy suất phần tử cuối cùng 
- length : là độ dài của mảng và nó đếm từ 1
- index : là vị trí của phần tử và đếm từ 0
==> để truy suất phần tử cuối cùng thì ta lấy : độ dài phần tử - 1
=> công thức : tên_biến.length - 1
myDemo[myDemo.length -1]
*/

