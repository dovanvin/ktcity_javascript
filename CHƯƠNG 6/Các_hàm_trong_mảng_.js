
//********* HÀM DÙNG TRONG MẢNG ************/
// VÍ DỤ 1 MẢNG
const myDemo = ["tuấn","An","Quân","Đạt"];
/**
 * length : dùng duyệt mảng , độ dài mảng và khi dùng không cần () ;
 * console.log(myDemo.length); // 4
 */
/**
 * reverse : => đảo ngược vị trí mảng 
 * console.log(myDemo.reverse()); // (4) ['Đạt', 'Quân', 'An', 'tuấn']
 */
/**
 * join : => nói các phần tử trong mảng để tạo chuỗi 
 * console.log(myDemo.join()); // tuấn,An,Quân,Đạt
*/

/*****************THÊM XOÁ CUỐI ************/

/**
 * push : => thêm phần tử vào cuối mảng ;
 * console.log(myDemo.push("linh")); // 5
 * console.log(myDemo); // (5) ['tuấn', 'An', 'Quân', 'Đạt', 'linh']
 */

/**
 * pop : => dùng xoá đi phần tử cuối của mảng
 * console.log(myDemo.pop()); // Đạt
 * console.log(myDemo); // (3) ['tuấn', 'An', 'Quân']
 */

/*****************THÊM XOÁ ĐẦU *************/

/**
 * unshift : => thêm phần tử vào đầu mảng 
 * console.log(myDemo.unshift("nam")); //5
 * console.log(myDemo); // (5) ['nam', 'tuấn', 'An', 'Quân', 'Đạt']
 */

/**
  * shift : => xoá phần tử đầu tiên trong mảng
  *console.log(myDemo.shift()); // tuấn
  *console.log(myDemo); //(3) ['An', 'Quân', 'Đạt']
  */

/************************VỊ TRÍ  */

/**
 * indexOf : tìm vị trí phần tử đầu tiên
 * console.log(myDemo.indexOf("tuấn"));
 * console.log(myDemo);
 */
/**
 * lastIndexOf : tìm vị trí phần tử cuối
 * console.log(myDemo.lastIndexOf("tuấn"));
 * console.log(myDemo);
 */