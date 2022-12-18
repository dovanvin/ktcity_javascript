// closure : có nghĩa là nó function con có thể truy xuất ra ngoài function cha

function name() {
    let cotal = "vinh"; // block scope so vs ông function name(){} .Nhưng so vs ông name2() thì nó lại là global scope
    function name2(){
        console.log(cotal);
    }
    return name2 ;
    
}
name()();


// ví dụ 2:
function myDemo(a) {
    return function myDemo1(b) {
        console.log(`${a} ${b}`);
    }
}
let demo = myDemo("xin chào");
demo("vinh");