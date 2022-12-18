
//***************** FOR__IN ****************** */
/*
for(let key in object ) {
    console.log(key);
}
*/

const myDemo = {
    name : "Hoàng",
    age : 19,
    "last-name" : "Nguyễn",
    hi: () => {
        console.log(`hello world`);
    }
} ;

for (let key in myDemo) {
    let cotal = myDemo[key] ;
    console.log(`${key}:${cotal}`);
}

