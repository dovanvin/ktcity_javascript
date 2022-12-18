
//**********WHILE ********* DO_ WHILE ********* FOR_OF **********/

const myDemo = [1, 2, 3, 4, 5, 6];
// WHILE : là vòng lặp không biết được số lần lặp như for .Nó chỉ lặp cho tới khi điều kiện thoả mãn 
let i = 0;
while ( i < 5) {
    // console.log(myDemo[i]); // in ra giá trị số phần tử mảng
    i++ ;
}

// DO WHILE : nó giống với while chỉ khác ở chỗ sẽ chạy trước rồi mới sét điều kiện 

let j = 0;  
do {
    // console.log(myDemo[j]); 
    j += 1 ;
} while(j < 5);


// FOR OF : là dùng nhiều trong mảng 2 chiều 
// for ( value of array ) {

// ở trên chúng ta có mảng => myDemo = [1, 2, 3, 4, 5, 6];
let a = [] ;
for ( let value of myDemo) { // cách sao chépp mảng kiểu mới
    a.push(value) ;
}
console.log(a); // sao chép
console.log(`--------------------------------------`);

for ( let value of myDemo) {
    console.log(value);
}



