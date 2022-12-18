


// ---------- PHẦN CÁC HÀM GET TRONG DATE ---------------
// Từ get ở đây có thể hiểu như thể truy xuất

const birthday = new Date( 2021, 11, 11 ) ; 
//-- getFullYear() ; truy xuất năm
console.log(birthday.getFullYear()) ; // 1970

//--getMonth() ;  truy xuất tháng 0 -> 11
// 0 => tháng 1 còn 11 => tháng 12
console.log(birthday.getMonth()); // 12

//-- getDate() ; truy xuất ngày 
console.log(birthday.getDate()); // 11

//-- getDay() ; truy xuất thứ 0 -> 6
// 0 => chủ nhật ; 6 => thứ 7
console.log(birthday.getDay()); // 6

console.log(birthday.getHours()); // lấy giờ 0 -> 23

console.log(birthday.getMinutes()); // lấy phút 0 -> 59

console.log(birthday.getSeconds());  // lấy giây 0 -> 59

console.log(birthday.getMilliseconds()); // lấy số mili giây 0 -> 999

console.log(birthday.getTime()); // truy xuất convert sang dạng miliseconds() từ 1/1/1970 đến thời điểm hiện tại



// ---------------------------------------- CÁC HÀM SET TRONG DATE ------------------------------------------

// Nếu đối với hàm get dùng để truy xuất
// Nếu đối với hàm set dùng để thiết lập 

birthday.setFullYear(1970);
console.log(`update ${birthday}`);

// chú ý không thể thay đổi thứ // như phần get có hàm getDay() vì lúc đó mik truy xuất còn set nó thiết lập nên ko được 
// set còn có hiểu thay đổi 
// còn lại làm tương tự như get khác mỡi chữ set và ý nghĩa của nó


