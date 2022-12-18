/**************BÀI TẬP *************** */

//--1 : Viết một function để kiểm tra value có phải một object hay không

// Như được biết : object , {} , [] , null => thì chúng đều là object 
// Vậy làm sao để nhận biết được mình object thôi 

function myObject(value) {
    if(typeof value === "object" && !Array.isArray(value) && value !== null ) {
        return true ;
    }
    return false ;
}
console.log(myObject(null)); // false

//--2 : từ 1 object { a:1, b:2 }  => [["a", 1], ["b", 2]]

function myDemo(object) {
    if(!Object(object)) {
        return ;
    }
    return Object.entries(object);
    
}
console.log(myDemo({a: 1, b: 2}));