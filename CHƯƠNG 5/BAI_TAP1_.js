// bài 1 : nhập năm sinh và in ra số tuổi

const getAge = (year = 0) => {
    if (typeof year !== "number") return 0 ;
    const now = new Date() ;
    let myYear = now.getFullYear();
    return myYear - year ;
}
let kq = getAge(2020
    ) ;
console.log(kq);