
/*********** HÀM FIND (tìm thấy) ************/

// hàm find : nó trả về phần tử tìm thấy đầu tiên trong mảng thoả mãn ddieuf kiện nào đó

const myDemo = [1, 23, 300, 1000 , 9, 5] ;
const myFind = myDemo.find( (value) => value > 10) ; //trong đó value là giá trị phần tử trong mảng
console.log(myFind); // 23 .Vì số lớn hơn 10 đầu tiên là 23 .
// nếu ko tìm thấy nó trả về undefined


/********** HÀM FIND_INDEX (Tìm thấy vị trí) ***************/

// findIndx là hàm tìm vị trí đầu tiên thoả mãn điều kiện
const myDemo1 = [1, 23, 300, 1000 , 9, 5] ;
const myFindIndex = myDemo1.findIndex((value) => value > 10 );
console.log(myFindIndex); // 1 .Vì vị trí tìm thấy element > 10 là 23 mà 23 ở vị trí index = 1
//chú ý nếu ko timd thấy kết quả t/mãn thì sẽ in ra -1