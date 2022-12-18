
const myDemo = {
    name : "Hoàng",
    age : 19,
    "last-name" : "Nguyễn",
    hi: () => {
        console.log(`hello world`);
    }
} ;
/** cách truy suất thông thường
 * const x = myDemo.name
 * const x = myDemo.age
 * const x = myDemo["last-name"]
*/
const {name, age, ...newobj} = myDemo
console.log(newobj);
//----------------------------------------------
function myFn(obj){
    console.log(obj.name, obj.age, obj.school);
}
const obj = {
    name : "hoàng",
    school: "tôi không biết",
    age: 19,
};

myFn(obj);