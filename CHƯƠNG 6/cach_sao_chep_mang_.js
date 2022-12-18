
/****************CÁCH ĐỂ SAO CHÉP MỘT MẢNG **************** */

const myDemo = [1, 2, 3, 4, 5]; // mảng gốc

// có tất cả 2 sao chép

//CÁCH 1:
let mySlice = myDemo.slice(0); // cắt nguyên 1 mảng
console.log(mySlice); //(5) [1, 2, 3, 4, 5]

//CÁCH 2: dùng 3 chấm [...tên mảng]
let myStr = [...myDemo];
console.log(myStr);