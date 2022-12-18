// new date() là built-in abject => có sẵn trong javascript
//**************************** */
// PHẦN 1
//**************************** */
const now = new Date() ; // Date() có sẵn 
console.log(now);
//Sat Dec 11 2021 08:58:08 GMT+0700 (GMT+07:00)

// timezone => GMT+0700 (GMT+07:00) (múi giờ)
// second => 08 (giây)
// minute => 58 (phút)
// hour =>  08 (giờ)
// year => 2021
// month => Dec
// day =>  11
// sat => thứ ( day of the week)

//********PHẦN 2********** */

//Tìm hiểu về timestamp(dấu thời gian) & epochtime(kỷ nguyên ; 01/1/1970)

// timestemp dựa vào unix time 
// Nếu ở phần 1 chúng ta dùng hàm Date() tính ra nhỏ nhất là second(giây) 
//=> Nhưng vs timestemp nó tính còn nhỏ hơn miliseconds (mili giây);
console.log(now.getTime()); // in ra 1639189701827 đây là số đc tạo từ timestemp tính ra tận miliseconds kết vs epochtime



