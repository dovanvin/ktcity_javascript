
/********** HÀM SOME & HÀM EVERY ***********/

// some : là hàm trả về giá trị true và false 
// .filter( (value, index, array) =>{});

const myDemo = [1, 2, 3, 4, 5];
const mySome = myDemo.some( (value) => value > 3);
console.log(mySome); // true // nhưng nếu để điều kiện value > 50 thì sai => false

/*--------------------------------- */

// every : giống some nhưng về cách trả giá trị đối vs điều kiện

const myEvery = myDemo.every( (value) => value > 3);
console.log(myEvery);  // false // để đáp là true thì điều kiện phải đúng hết
// SO SÁNH EVERY VÀ SOME 
//- SOME là hàm chỉ cần trong mảng 1 giá trị thoả mãn là in ra true
//- EVERY là hàm chỉ in ra true khi giá trị trong mảng thoả mãn hết điều kiện 