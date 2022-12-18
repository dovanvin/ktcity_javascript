
//************************PHƯƠNG THỨC TRONG OBJECT (method) *************************** */
const myDemo = {
    name : "Hoàng",
    age : 19,
    "last-name" : "Nguyễn",
    hi: () => {
        console.log(`hello world`);
    }
} ;

//-----------------Object.keys()-----------------

// Object.keys() => trả về 1 mảng chứ giá trị là key
// const keys = Object.keys(myDemo);
// console.log(keys); // (4) ['name', 'age', 'last-name', 'hi'] => nó trả về giá trị bằng key

//----------------Object.values()-----------------

// Object.values() => trả về 1 mảng chứ giá trị là values
// const values = Object.values(myDemo);
// console.log(values); // (4) ['Hoàng', 19, 'Nguyễn', ƒ]

//----------------Object.entries()------------------

// Object.entries() => trả về 1 mảng lồng mảng [ ["key1","value1"],["key2","value2"] ]
// const entries = Object.entries(myDemo) ;
// console.log(entries);

//-----------------Object.assign()-------------------

// Object.assign() => gộp 2 hay nhiều object lại thành 1 object
const myDemo1 = {
    name : "Đạt",
    age : 16,
}
//--1: gộp myDemo và myDemo1
const myObject = Object.assign(myDemo, myDemo1);
console.log(myObject);
//--2 : dùng 3 chấm để gộp
const myObject1 = {...myDemo, ...myDemo1};
console.log(myObject1);

//------------------Object.freeze()------------------

// Object.freeze() => nó làm object cha bị đóng bắng .Ko thay đổi được
const cotal = Object.freeze(myDemo);
cotal.name = "Tuấn"; 
console.log(cotal); // ko thay đổi đc key và value trong object cha

//------------------Object.seal()------------------

// Object.seal() => nó có sửa xoá key và value của object cha .Nhưng không thêm được key và value mới vào 