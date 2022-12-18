
//************* PHƯƠNG THỨC SLICE (lát cắt)************* */

/**
 * slice là một phương thức cắt từ mảng này sang 1 mảng mới 
 */
const myDemo = ["a", "b", "c", "d"] ;
/**
 * BAO GÔM 3 KIỂU CẮT
 */
// - kiểu 1 cắt cả mảng này gán vào mảng kia 
let kieu1 = myDemo.slice();
console.log(kieu1); //(4) ['a', 'b', 'c', 'd']


// -kieu 2 : là cắt từ start đến hết
let kieu2 = myDemo.slice(1);
console.log(kieu2); // (3) ['b', 'c', 'd']


// - kiểu 3 : là cắt 1 đoạn hoặc 1 khoảng trong mảng 
//=> ten_biên = myDemo.slice(start , end); trong đó start & end là index
// chú ý end = index - 1 ;
let kieu3 = myDemo.slice(1,3); 
console.log(kieu3); // (2) ['b', 'c'] 

//CHÚ Ý: Nếu viết index = số âm thì đếm ngược lại
let chuY = myDemo.slice(-1);
console.log(chuY);// ['d']


