// bài tập 2 : in hoa chữ cái đầu trong chữ . 
//Ví dụ khi nhập NAM -> Nam ; nữ -> Nữ


function myWorld(str = "") {
    if(str.length === 0) return null ;
    let text = str.toLowerCase().charAt(0).toUpperCase();
    let text1 = str.slice(1).toLowerCase();
    console.log(`${text}${text1}`);
}
myWorld("X.CODE ĐÀO TẠO LẬP TRÌNH 24H");