const number = -10;
console.log(Math.abs(number)); // giúp giá trị âm sang dương 

const number1 = 4.3 ;
console.log(Math.floor(number1)); // làm tròn xuống 4

console.log(Math.ceil(number1)); // làm tròn lên 5

console.log(Math.round(number1)); // làm tròn đến số gần nhất và gần nhất ở đây là 4

// làm tròn số 0.33333333 = 1/3 ; làm tròn lấy sau 2 kí tự 0.33 ;
const number2 = 1/3 ;
console.log(parseFloat( number2.toFixed(2)));  // dùng parseFloat để chuyển sáng kiểu số

// Math.random hàm này tạo 1 số float ngẫu nhiên từ 0 -> 1
console.log(Math.floor(Math.random()*10));

// Math.max là hàm in ra số lớn nhất
console.log(Math.max(1,2,3,100));
// Math.min là hàm in ra số lớn nhất
console.log(Math.min(1,2,3,100));

console.log(Math.pow(3,2)); // đây là hàm mũ lũ thừa 3^2 = 9

//**********HÀM NÂNG CAO */ isNaN & Number.isNaN  đây trả về đúng sai
console.log(isNaN('lại phải học bài')); true // vì isNaN nó chỉ thoả mãn với chuỗi
console.log(isNaN('123456')); false// mặc dù đây vẫn là chuổi nhưng viết số nó ko nhận nên sai

console.log(Number.isNaN(NaN)); // chú riêng hàm này chỉ nhận value là NaN
