
//*************OPTIONAL CHAINING************* */

// optional chaining : => nó là 1 cách viết mới giúp duyệt object mọt cách ngắn gọn để kiểm tra xem key có ở trong object ko

const myDemo = {
    name : "Hoàng",
    age : 19,
    "last-name" : "Nguyễn",
    hi: () => {
        console.log(`hello world`);
    },
    hello: {
        name : "Luân ",
    }
} ;
// duyệt object
//--1 
if(myDemo.hello) {
    if(myDemo.hello.name){
        console.log(myDemo.hello.name);
    }
}

//--2
console.log(myDemo.hello?.name);