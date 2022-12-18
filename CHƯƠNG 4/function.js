// function dịch ra có nghĩa là hàm
// cú pháp function classname( tham số 1 , tham số 2){}

// ví dụ:
    function myDemo(a, b) {
        let sum = a+b ;
        return sum ;
    }
    console.log(myDemo(2, 3)); // => (2, 3) gọi là đối số.
    const str = myDemo ;


    // ******************************************** BUỔI 2 ****************
// vì hàm nó mang tính đóng gói nên chúng ta có thể sử dụng lại được bằng cách đặt biến cho nó.
// fn là kí hiệu của function

// ví dụ tính trung bình điểm / công thức (a + b)/2 = đtb

function sum(a, b) {
    return (a+b);
}
const total = sum ;
// tạo hàm để dùng lại 

function diemTrungBinh(a, b, fn) {
    let k1 = fn(a, b);
    return k1/2;
}
console.log(diemTrungBinh(200, 400, total));

// *************************************** BUỔI 3 *****************
// không bị hoisting nếu để lên đầu sẽ bị lỗi
// HÀM VÔ DANH có thể xem như một ham function nhưng không có tên
let sum3 = function () {
    console.log("hàm vô danh");
}
sum3();

// cách viết ngăn gọn hàm vô danh
(function(){
    console.log("cách viêt tắt");
})() ;

 