
// bài 1 sao chép 1 mảng 

const myDemo = [1, 2, 3, 4, 5];

// bây giờ sẽ sao chép mảng myDemo sang mảng copyArray

const copyArray = []; // mảng rỗng 

for (let i=0 ; i<myDemo.length ; i++) {
    copyArray.push(myDemo[i]);
}
console.log(copyArray); // (5) [1, 2, 3, 4, 5]

// bài 2 đảo ngược 1 chuỗi chữ  " xin chao" -> " oahc nix"
let str = "xin chào";
let tong = "" ;
for ( let i=str.length-1 ; i>=0 ; i--) {
    console.log(str[i]); // o à
    tong += str[i]; // tong = tong + str[i] = o + à
}
console.log(tong); // o à


