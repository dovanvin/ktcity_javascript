// in ra được 14/6/2021

const now = new Date( 2021, 5, 14);
console.log(now.toLocaleDateString());
const year = now.getFullYear();
const month = now.getMonth() +1;
const date = now.getDate();
let fix = month < 10 ? "0" : "" ;
console.log(`${date}/${fix}${month}/${year}`);