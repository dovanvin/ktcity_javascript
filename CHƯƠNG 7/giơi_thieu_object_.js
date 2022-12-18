
//********** OBJECT **********/

// object : bao gồm các key và value ;
// object : có 3 kiểu thể hiện
//--1
//const myDemo = {} ; 
//--2
//const myDemo1 = {key = value} ;
//--3
//const myDemo2 = new Object();
//---------------------------------------------------------

// ví dụ:
const myObject = {
    name : "Nguyễn Văn A" , // key => name // value => "Nguyễn Văn A"
    age : 19 ,
    gender : "Nam",
    "last-name" : "Nguyễn",
    hello : function () { // key => hello // value => function() {} // chú ý function ở đây gọi method(phương thức)
        console.log("hello world");
    },
};

//----------------------- CÁCH TRUY SUẤT-----------------------------------
// cách truy suất giá trị => chúng ta có 2 cách để truy suất giá trị
//--1 : dot notation => object.key
//--2 : bracket notation => object["key"]

// ví dụ : dot notation
let cotal = myObject.name ;
console.log(cotal);
// ví dụ : bracket notation
let cotal1 = myObject["last-name"];
console.log(cotal1);

//---------------------------CÁCH THAY ĐỔI GIÁ TRỊ--------------------------------
myObject.name = "Nguyễn Văn B";
myObject["last-name"] = "Lê" ;
console.log(myObject);

//-----------------------------CÁCH XOÁ GIÁ TRỊ-----------------------------------
delete myObject.name ;
delete myObject["last-name"];

