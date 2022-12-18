// bài 1 : đảo ngược 1 chuỗi . Ví dụ "xin chào tôi là x-code"

const myDemo = (str) => {
    if (!str) return null; // nếu ko nhập gì thì in ra null
    let myArray = str.split(" ").reverse().join(" ");
    console.log(myArray);
}
myDemo("xin chào tôi là x-code");

//*************************** */ bài 2 : đảo ngược kí tự .Ví dụ : "i love" -> "evol i"
console.log(`---------------bài 2-------------------`);
// cách 1:
const myStr = (str) => {
    if (!str) return null; // nếu ko nhập gì thì in ra null
    let myArray = str.split("").reverse().join("");
    console.log(myArray);
}
myStr("i love");

// cách 2:
const myStr1 = (str) => {
    if (!str) return null; // nếu ko nhập gì thì in ra null
    let myArray = str.split(" ").map((value) => value.split("").reverse().join("")).reverse().join(" ");
    console.log(myArray);
}
myStr1("i love");


//********************* */ BÀI 3 : In ra một chuỗi với đk các chữ cái đầu tiên đều viết hoá
console.log(`---------------bài 3-------------------`);
// ví dụ : " xin chào ban nhé " -> " Xin Chào Bạn Nhé "

function myText(str = "") {
    if (str.length === 0) return null;
    let text = str.toLowerCase().charAt(0).toUpperCase();
    let text1 = str.toLowerCase().slice(1);
    console.log(`${text}${text1}`);
}
function myUpperCase(str) {
    if (!str) return null;
    const cotal = str.split(" ").map((value) => myText(value)).join(" ");
    console.log(cotal);
}
myUpperCase("xin chào hạnh phúc");
