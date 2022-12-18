
//************** PHƯƠNG THỨC SPLICE (mối nối) ************** */
// công dụng: xoá và thêm
const myDemo = ["a","b","c","d"] ;
// console.log(myDemo);
/** TẤT CẢ CÓ 4 KIỂU DÙNG HÀM SPLICE */

/**
 *1 splice( start );
 *2 splice( start, deleteCount )
 *3 splice( start, deleteCount, item1)
 *4 splice( start, deleteCount, item1, item2, itemN);
 */

 /** TRONG ĐÓ:
  * start : là vi trí bắt đầu
  * deleteCount: là số phần tử cần thay đổi hoặc xoá
  * item : phần tử bổ xung thay thế
  */
 // ví dụ:
 //1 
    // const text = myDemo.splice(2); // lấy vị trí
    // console.log(myDemo);// (2) ['a', 'b']
 //2
//  const text = myDemo.splice(1,2); // khoảng phần tử bị xoá
//  console.log(myDemo);// (2) ['a', 'd']
 //3
//  const text = myDemo.splice(1, 2, "e");
//  console.log(myDemo);//(3) ['a', 'e', 'd']