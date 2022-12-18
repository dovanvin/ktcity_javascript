
/********** HÀM MAP ***********/

// hàm map là tạo 1 mảng mới khi return
const myDemo = [1, 2, 3, 4, 5];
// dùng hàm map để nhân 2 giá trị phần tử trong mảng

const myMap = myDemo.map( (value, index, array) => {return value * 2} );
console.log(myMap);