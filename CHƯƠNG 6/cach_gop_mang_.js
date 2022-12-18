
/************CÁCH GỘP MẢNG************* */

let str1 = [1,2];
let str2 = [3,4];
let str3 = [5,6];

// cách 1 để gộp 3 mảng trên
const myDemo = str1.concat(str2,str3); // dùng hàm concat để gộp mảng
console.log(myDemo);

// cách 2 : dùng 3 dấu chấm
const myDemo1 = [...str1, ...str2, ...str3];
console.log(myDemo1);