
// Bài 3: Viết một chương trình có tên là timeSince ,đầu vào là thời gian và tính thời gian đầu vào so với thời gian hiện tại
// ví dụ : bạn đang chats với bạn Nguyên Văn A .Nhưng bạn  offline nó sẽ hiện khoảng thời gian trước đó như 30p , 1p , 1 tháng trước

// 1 năm = 365 * 24 * 60 * 60 = 31536000
// 1 tháng = 31 * 24 * 60 *60 = 2678400
// 1 tuần = 7 * 24 * 60 * 60 = 604800
// 1 ngày = 24 * 60 * 60 = 86400
// 1 giờ = 60 * 60 = 3600j
// 1 phut = 60 


function timeSince(date) {
    let now = new Date();
    console.log(now);
    let yourDate = new Date(date);
    const minute = Math.floor((now.getTime() - yourDate.getTime())/1000);
    console.log(minute);
    let timeNew = Math.floor(minute / 31536000 );
    if (timeNew > 1) {
        console.log(`${timeNew} năm trước`);
        return ;
    }
     timeNew = Math.floor(minute / 2678400 );
    if (timeNew > 1) {
        console.log(`${timeNew} tháng trước`);
        return ;
    }
     timeNew = Math.floor(minute / 604800);
    if (timeNew > 1) {
        console.log(`${timeNew} tuần trước`);
        return ;
    }
     timeNew = Math.floor(minute / 86400);
    if (timeNew > 1) {
        console.log(`${timeNew} ngày trước`);
        return ;
    }
     timeNew = Math.floor(minute / 3600);
    if (timeNew > 1) {
        console.log(`${timeNew} giờ trước`);
        return ;
    }
     timeNew = Math.floor(minute / 60);
    if (timeNew > 1) {
        console.log(`${timeNew} phút trước`);
        return ;
    }
    timeNew = Math.floor(minute );
    if (timeNew > 1) {
        console.log(`${timeNew} giây trước`);
        return ;
    }

    
}
timeSince("Sun Dec 12 2021 22:55:00 GMT+0700 (GMT+07:00)");





