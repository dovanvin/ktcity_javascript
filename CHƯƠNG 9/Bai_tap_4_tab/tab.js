/*
window.addEventListener("load", function () {
    const tabs = document.querySelectorAll(".tab-item");
    const tabsContent = document.querySelectorAll(".tab-content");


    tabs.forEach((el) => el.addEventListener("click", handleChangeTab));
    function handleChangeTab(e) {
      const tabId = e.target.dataset.tab;
      tabs.forEach((el) => el.classList.remove("active"));
      e.target.classList.add("active");
      tabsContent.forEach((el) => {
        el.classList.remove("active");
        if (el.getAttribute("data-tab") === tabId) {
          el.classList.add("active");
        }
      });
    }
  
   
  });
*/


window.addEventListener("load", function() {
  let tabs = document.querySelectorAll(".tab-item");
  let tabContent = document.querySelectorAll(".tab-content");
  // tạo sự kiện click cho nút tabs
  tabs.forEach( el => el.addEventListener("click", tabClick));
  function tabClick(event) {
    // xử lý tab
    const tabId = event.target.dataset.tab;
      tabs.forEach((el) => el.classList.remove("active"));
      event.target.classList.add("active");

    // xử lý content
    tabContent.forEach (el => {
      el.classList.remove("active");
      let tabContentId = el.getAttribute("data-tab");
      if ( tabContentId === tabId) { // data-tab = "1"
        el.classList.add("active");
      }
    });
  }
  
});


