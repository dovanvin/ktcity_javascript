// arrow function nó khá giống với một lại function chung ta từng học đó là anonymous function : hàm vô danh

const cotal = function (x) {
    return x*x ;
}
console.log(cotal(5)); // đây là anonymous function

// arrow function 
const singer = (x) => { // so vs anonymous function thì arrow sẽ bỏ chữ functon thau vào đó là dấu " => " ;
    return x*x;
}
console.log(singer(3));

// cách viết tắt 1 dòng 
const singer1 = (x) => x*x ;
console.log(singer(4));


// ví dụ : bài 1 tìm số lớn nhất
const myMax = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("Mời nhập lại giá trị");
        return 0;
    }
    return Math.max(a, b);
}
console.log(myMax(3, 5));
