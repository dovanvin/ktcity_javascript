// bài tập 1 dunhf hàm so sánh hai số a và b .Tìm ra số lớn hơn

// cách 1
function number(a, b) {
    let kq = "" ;
    if(a > b) {
        kq = `${a} là số lớn nhất` ;
    }else {
        kq = `${b} là số lớn nhất` ;
    }
    console.log(kq);
    return ;
}
number(8, 10);

// cách 2

function myDemo(a = 0, b = 0 ) {
    if( typeof a !== "number" || typeof b !== "number"){
        console.log("mời nhập lại");
        return ; // vì để return nên console.log ra undefined 
    }
    return Math.max(a, b) ;
}
console.log(myDemo(10, "1"));