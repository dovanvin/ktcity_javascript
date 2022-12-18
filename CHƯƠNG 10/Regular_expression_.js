//* Regular expression : biểu thức chính quy
//*--- 1 : có 2 cách khai báo với Regex
const re1 = / hello /;
const re2 = new RegExp("hello") ;

//*---2 : 
// ^ string bắt đầu với một từ khoá nào đó
// $ string kết thúc một từ khoá nào đó 

console.log(/hi/.test("hi"));;

console.log(/^hi/.test("hi welcome to you"));
console.log(/hi$/.test(" welcome to you hi"));

//*---3 : renges []
console.log(`-----------------------------`);
// [a-z] ; [A-Z] ; [0-9] ; [a-z0-9A-Z]
console.log(/[a-z]/.test("abc")); // true
console.log(/[A-Z]/.test("A"));
console.log(/[0-9]/.test("1000"));
console.log(/[a-z0-9A-Z]/.test("abc1234Avb"));
console.log(/[^a-z]/.test("abc")); // false  .Vì ^ khác với ở phần 2 .Nó giống với dấu ! là ngược lại

//*---4 : Meta characters
// \d ~ [0-9] 
console.log(/\d/.test("1234")); ; // true
// \D ~ [^0-9] => ngược lại với \d
/\D/.test("1234") ; // false
// \w ~ với dấu gạch dưới số và chữ [a-zA-Z0-9_]
/\w/.text("_") ; // true
// \W ~ ngược lại với \w
/\W/.text("_") ; // false
// \s ~ khoảng trắng
/\s/.text(" ") ; // true
// \S ~ ngược lại với \s
/\S/.test(" ") ; // false

// \n ~ xuống dòng

//*---5 : Quantifiers => {n} ; {n, m} ; + ; * ; ?
// string.match(regex)~ "abc".match(/ \w /) => trả ra chuỗi [ ]
// {0} ~ độ dài số 
// {n, m} ~ khoảng số 
// + ~ lấy 1 hoặc nhiều kí tự thoã mãn điều kiện

const str1 = " welcome to you 2022" ;
console.log(str1.match(/ \d /));
