
//************** Method Trong Bất Đồng Bộ ***************/

// Trong bất đồng bộ có tất cả 3 phương thức để sử lý :
// 1- callback => sử lý bất đồng bộ nhưng bị vào nhau khó kiểm soát
// 2- promises => khắc phục không lồng vào nhau nhưng dài dòng
// 3- async await => tối ưu giúp sự lý gọn gàng code

//********* CALLBACK **********/

function httpGetAsync( theUrl, callback) {
    let xmlHttp = new XMLHttpRequest() ;

}
