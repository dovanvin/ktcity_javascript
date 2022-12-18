// type_coercion có nghĩa là một giá trị đặc biệt nào đó
console.log(1 + 2); // = 3
console.log('1' + 2); // = 12
// console.log(Number(ubdelined) + 2); // => ko được vì nó NaN + 2 -> lỗi 
// chú ý chỉ có " + " mới có vấn đề về việc chuỗi ko cộng đc với số như: "2" + 2 = 22

// "-" ; "*" ; "/"  => đều làm được
console.log("2" -1 ); // = 1 vì 2 - 1 = 1 đó là điều khác với cộng
console.log(10 / "2"); // = 5 

console.log(null - 2); // 0-2 = -2 vì Number(null) = 0
