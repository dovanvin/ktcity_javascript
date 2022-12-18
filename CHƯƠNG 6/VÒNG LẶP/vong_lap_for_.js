
/****** VÒNG LẶP FOR ******/

const myDemo = [1, 2, 3, 4, 5, 8];

// duyệt mảng
// for (let i=0 ; i<myDemo.length ; i++) { // myDemo.length = 6
//     console.log(i); 
// } 
//=> trên đây là phần in ra lần lượt các vị trí index
console.log(`-----------------------------`);

// for (let i=0 ; i<myDemo.length ; i++) {
//     console.log(`giá trị lần lượt là ${myDemo[i]}`); // giá trị lần lượt số phần tử  // 1, 2, 3, 4, 5, 8
// }

console.log(`------------------------------`);

// yêu cầu in ra giá trị từ 1 -> 4
// for (let i=0 ; i<myDemo.length ; i++) {
//     console.log(`${myDemo[i]}`); // 1 2 3 4
//     if (myDemo[i] === 4) {
//         break ;
//     }    
// }

console.log(`------------------------------`);

// yêu cầu in ra giá trị từ 1 -> 3 nhảy qua 4 rồi chạy tiếp

// for (let i=0 ; i<myDemo.length ; i++) {
    
//     if (myDemo[i] === 4) {
//         continue ;
//     }    
//     console.log(`${myDemo[i]}`); // 1 2 3 5 8
// }

console.log(`------------------------------`);

for( let i = myDemo.length-1 ; i>=0 ; i--) {
    console.log(`gias trị ngược là ${myDemo[i]}`); // 8 5 4 3 2 1
}

