
/************ HÀM REDUCE (giảm bớt) **********/

// reduce giúp sử dụng mảng gọn gàng hơn .Nhờ tính gom giảm bớt lại 

const myDemo = [1, 2, 3, 4, 5];
const myReduce = myDemo.reduce((a, b) => {
    console.log(a, b);
    return a+b;
    
    }, 0); // 0 là giá trị khởi tạo
console.log(myReduce); // 15