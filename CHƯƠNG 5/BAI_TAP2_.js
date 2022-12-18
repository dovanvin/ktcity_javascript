
// Bài 2: Viết một chương trình đếm ngược về thời gian (countdown). Dựa thời gian đầu vào 
// ví dụ nếu thời gian cho là 1 phút khi chạy đến 0 phút sẽ báo hết thời gian

const countDown = (minute ) => {
    let minute1 = minute * 60 ;// 60s
    let counter = 0;
    const times = setInterval(() => {
        counter += 1;
        console.log(counter);
        if (counter === minute1) {
            clearInterval(times);
            console.log(`thoi gian ${minute1} đã hoàn thành`);
        }
    }, 1000);
}
countDown(1);
