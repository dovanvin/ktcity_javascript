
//************** CÁCH SAO CHÉP OBJECT ************* */

// Công dụng : sao chép object là giúp khi ta sử dụng thì nó không bị ảnh hướng tới object cha
const myDemo = {
    name : "Hoàng",
    age : 19,
    "last-name" : "Nguyễn",
    hi:  {
        name: "Luân",
        hello: {
            name : "hoàng hà"
        }
    }
} ;
//--1 : dùng dấu 3 chấm để sao chép

const myDemo1 = {...myDemo};
console.log(myDemo1);

//--2 : dùng phương thức Object.assign()
const myDemo2 = Object.assign(myDemo);
myDemo2.name = "Luân";
console.log(myDemo2);

//--3 : dùng JSON để sao chép object nâng cao
const myDemo3 = JSON.parse(JSON.stringify(myDemo));
myDemo3.name = "Khánh" ;
console.log(myDemo3);
