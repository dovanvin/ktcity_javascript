
// JSON : được viết tắt JavaScript Object Notation
/* trong JSON có 2 phương thức

 - JSON.stringify(value) => chuyển đổi từ mảng sang string
 - JSON.parse => ngược lại là chuyển từ string sảng mảng
*/
// Công dụng: dùng để chuyển đổi từ mảng sang string và so sánh 2 mảng

// ví dụ : 
let number2 = [1,2];
let number3 = [1,2];



// console.log(JSON.stringify(number3));// in ra chuỗi"[1,2]"
// so sánh 2 chuỗi number2 và number3
let text = JSON.stringify(number2);
let text1 = JSON.stringify(number3);
console.log(text === text);//  true
console.log(JSON.stringify(number3));// in ra chuỗi"[1,2]"
//JSON.parse
let str = "[1,2,3,4]" ;
console.log(JSON.parse(str)); //in ra 1 mảng: (4) [1, 2, 3, 4]

