
// ******************** Constructor ********************/

// object constructor => xây dựng đối tượng 
// => giống với một bản thiết kê để xây dựng đối tượng 

// Bước 1 : tạo bản thiết kế 
// function Name(firstName, lastName, avatar) {
//     this.firstName = firstName ;
//     this.lastName = lastName;
//     this.avatar = avatar ;
// }

// cách tạo khác :
let Name = function(firstName, lastName, avatar) {
    this.firstName = firstName ;
    this.lastName = lastName;
    this.avatar = avatar ;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}


// Bước 2 : sử dụng // xậy dựng đối tượng 
let usename = new Name("Đỗ", "Văn", "Vinh") ;
// Bước 3 : nếu muốn thêm một đói tượng nào đó ;
usename.age = 21 


console.log(usename);

// khi dùng getName()
console.log(usename.getName());

// nhưng vấn đề gặp phải là nếu chúng ta tạo hàng trăm đối tượng thì getName() => nó cũng tạo theo và bị trùng 
// => nên sử dụng Prototype


//********************** Prototype ***********************//
// => prototype : ý nghĩa là nguyên mẫu kiểu như là cái khuôn

String.prototype.demo = function() {
    return this + this ;
}
// sử dụng nó 
let str = "abc" ;
console.log(str.demo());

// ví dụ 2:
// tạo prototype

