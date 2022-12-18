
/********** HÀM FILTER (sàng lọc) ************/

// filter : là dùng để sàng lọc phần tử mảng theo các điều kiện
// .filter( (value, index, array) =>{});

const myDemo = [1, 2, 3, 4, 5];
const myFilter = myDemo.filter( (value) => value > 3);
console.log(myFilter); // (2) [4, 5]