
/********* HÀM FOREACH ************/

const myDemo = [1, 2, 3, 4, 5];
const myForEach = myDemo.forEach( (value, index, array) => {return value * 2} );
console.log(myForEach); // undefined
// ĐẾN PHẦN DOM CHÚNG TA SẼ TÌM HIỂU KĨ HƠN

/** CÂU HỎI : sự khác nhau giữa forEach và Map là gì ?
 * - forEach nó return được .Còn map thì ko
 * - Map thì tạo ra mảng mới dựa vào mảng ban đầu còn forEach thì không
 * -Vì forEach không có return nên nó chạy mãi không có cách nào cho nó dừng lại được .Trừ TH ko dùng 
 */