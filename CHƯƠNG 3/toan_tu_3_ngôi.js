// ternary operator : toán tử ba ngôi 

// const dtb = Number(prompt("Mời bạn nhập điểm"));
// let ketqua = "" ;

// if (dtb >= 8) {
//     ketqua = ("học sinh giỏi");
// }else if (dtb >= 6.5 && dtb < 8) {
//     ketqua = ("học sinh khá");
// }else{
//     ketqua = ("học sinh trung bình");
// }
// alert(ketqua);

// các 2 làm theo pp toán tử ba ngôi

const dtb = Number(prompt("mời bạn nhập điểm"));
let ketqua = dtb >= 8 ? "học sinh giỏi" : (dtb >= 6.5 && dtb < 8) ? "học sinh khá" : "học sinh trung bình";
alert(ketqua);

// sau dấu "?" là in ra câu lệnh kết quả
// sau dấu " : " là chuyển trường hợp khác

