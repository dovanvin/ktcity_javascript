
const a = document.createElement("a");
document.body.appendChild(a);
document.body.insertAdjacentElement("afterbegin", a);
a.className = "link" ;
a.setAttribute("data-name", "xcode") ;
a.setAttribute("href", "https://x-code.net")
a.setAttribute("value", "12");
a.textContent = "link"
//--------------- lấy giá trị từ data ---------------
a.addEventListener("click", function(event) {
    event.preventDefault(); // giúp link mặc định không khởi động được
    const demo = event.target.dataset.name; 
// giúp truy xuất giá trị trong data (lưu ý nếu tên là data-name => dataset.name 
// còn nếu dài hơn thì cameoCase ví dụ như data-name-abc => dataset.nameAbc)
    console.log(demo);
})
