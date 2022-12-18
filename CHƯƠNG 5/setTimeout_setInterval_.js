
//----------setTimeout & setInterval------------

// setTimeout : quy định một khoảng thời gian khoảng bao nhiêu thì xuất hiện
// setInterval : chạy liên tục 

//********setTimeout*********** */

setTimeout(function() {} ,1000);
//vi dụ
setTimeout(function() {
    console.log(`xin chào tôi là setTimeout`);
},1000);


//********setInterval********* */

setInterval(function() {} ,1000);
//vi dụ
let mySetinterval = setInterval(function() {
    console.log(`xin chào tôi là setInterval`);
},1000);

clearInterval(mySetinterval);
