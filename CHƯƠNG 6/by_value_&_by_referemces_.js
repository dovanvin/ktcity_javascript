
/**************** BY VALUE & BY REFERENCES ******************/

// by value : giá trị thực được lưu trữ trong bộ nhớ

let number = 1;
let number1 = 1;
console.log(number === number1); // true

// by referemces : nói tới 1 vùng bộ nhớ 
let number2 = [1,2];
let number3 = [1,2];
console.log(number2 === number3); //false