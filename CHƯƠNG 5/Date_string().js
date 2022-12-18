
//--------------- Date - String --------------
// có thể thiết lập từ 1 dạng chuỗi hợp lệ

const now = new Date();
console.log(now); // in ra thời gian hiện tại

console.log(now.toDateString()) ; // Sat Dec 11 2021 // ngày tháng

console.log(now.toTimeString()); // 16:38:03 GMT+0700 (GMT+07:00) // thời gian

console.log(now.toLocaleDateString()); // 12/11/2021 // theo quốc tế in tháng trước

console.log(now.toLocaleDateString("vi-VI")); //11/12/2021 // theo việt nam

console.log(now.toISOString()); // 2021-12-11T09:41:46.528Z