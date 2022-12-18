
//*********** TỪ KHOÁ THIS *********** */

// this : dùng để truy xuất cái gần nhất

const myDemo = {
    name : "Hoàng",
    age : 19,
    "last-name" : "Nguyễn",
    hi: function() {
        console.log(`${this.name}`);
    },

} ;
myDemo.hi();
