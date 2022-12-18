
//********* HÀM SORT( loại ) ********* */

// sort là gì ? => sorl hàm để phân loại rồi xắp xếp

const myDemo = [1, 100, 5, 7000, 9];
const sapXep = myDemo.sort(); // xắp theo chuẩn có nghĩa là số 1 luôn đứng trước số 5
console.log(sapXep); //(5) [1, 100, 5, 7000, 9]  

// sắp theo thứ tự từ bé đến lớn
// const sapXep1 = myDemo.sort(function(a,b) {  
//     if( a > b) return 1 ;  // thay đổi
//     if( a < b) return -1 ; // không thay đổi
// });
// console.log(sapXep1); //(5) [1, 5, 9, 100, 7000]

// cách viết tắt 
const sapXep2 = myDemo.sort((a,b) => 

( a>b ?  1 : -1 ));
console.log(sapXep2); //(5) [1, 5, 9, 100, 7000]

//CHÚ Ý : nếu đổi đk ngược lại sẽ sắp xếp thành từ lớn đến bé
const sapXep3 = myDemo.sort((a,b) => ( (a>b) ? -1 : 1 ));
console.log(sapXep3);

