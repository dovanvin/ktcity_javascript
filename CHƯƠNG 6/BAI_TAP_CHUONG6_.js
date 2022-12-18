// bài 1 : loại bỏ các giá trị falsy ra khỏi mảng 
// ví dụ: array = [null , "string" , 2, NaN , undefined];

// const  array = [null , "string" , 2, NaN , undefined];
// const myDemo = array.filter( (value) => Boolean(value));
// console.log(myDemo);

// bài 2 : quy tủ các mảng con thành 1 mảng và loại bỏ falsy
// ví dụ :  array = [null , "string" , [3,"string", ], NaN , undefined], [4, 5, "a", [false]];

// const array = [null , "string" , [3,"string" ["a", 4, 6, false]], NaN , undefined] ;
// const myDemo = array.flat(2);
// console.log(array);

// bài 3 : tạo một chương trình có tên là fizzBuzz với đầu vào là một số nguyên .Và cho chạy từ 1 tới số nguyên đó 
// Rồi kiểm tra nếu số ấy chia hết cho 2 thì in ra chữ "fizz".Nếu chia hêt cho 3 in ra "Buzz"
// Nếu chia hết cho cả 2 và 3 thì in ra "fizzBuzz"

// function fizzBuzz(number) {
//     for( let i = 1 ; i <= number ; i++ )
//     if (i%2 === 0 && i%3 === 0 ) {
//         console.log(`${i}=fizzBuzz`);
//     }else if (i%3 === 0) {
//         console.log(`${i}=buzz`);
//     }else if ( i%2 === 0) {
//         console.log(`${i}=fizz`);
//     }else{
//         continue ;
//     }
// }
// fizzBuzz(20);

// bài 4 : cho một chuỗi bất kỳ rồi đếm số thứ tự "vowels" có trong chuỗi 
// vowels -> u e o a i
// ví dụ: x-code -> 2

function myVowels(string) {
    let str = 0;
    let vowels = "ueoai" ;

    
// for ( value of array)
    for ( value of string.toLowerCase()) {
        if ( vowels.includes(value)) str += 1 ;
    }
    return str ;
}
console.log(myVowels("XCODE"));


