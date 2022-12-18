
/* ************** destructuring => viết ngăn gọn code lại khi giá trị 1 mảng ***************/

// ví dụ : 
const str = [1, 2, 3, 4, 5, 6, 7, 8];

const [x, y, z] = str ;
console.log(x,y,z);// 1 2 3

// dùng dấu 3 chấm dùng trong mảng
const [a,...rest] = str;  // dấu 3 chấm phía trước là sao chép giá trị còn lại // còn 3 chấm phía sau thì là sao chép mảng
console.log(rest); // (7) [2, 3, 4, 5, 6, 7, 8]

// 3 dấu chấm dùng trong hàm

function demo(b, ...c) {
    console.log(b,c); // 1 và (5) [2, 3, 4, 5, 6]
}
demo(1, 2, 3, 4, 5, 6);


