// Bài 3 : Viết một hàm tên callback ( function của parameter của function khác ) in ra kết quarcuar một hàm ib ở trên
// hàm lồng hàm mà từng phần closure



// ví dụ ở bài 1 : Tìm số lớn nhất trong hai số và in ra số đấy

function myMax(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("mời nhập lại");
        return 0 ;
    } 
    return Math.max(a, b);
}

// sử dụng hàm trên để làm bài tập 3

function myMax1(a, b, callback) {
    callback(myMax(a, b)); // hàm lồng hàm => có nghĩa là hàm callback lồng hàm myMax(a, b) đã được đặt = biến max;
}
function myPrint(cotal) {
    console.log(cotal);
}
console.log(myMax1(500, 1000, myPrint));





