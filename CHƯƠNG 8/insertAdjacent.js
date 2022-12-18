
/********************* Chèn Liền Kề ****************** */
// chèn ở các vị trí trong thẻ trên tag , trong tag , dưới tag , ngoài tag
//------------------------------------------
// selector.insertAdjacentText("beforebegin", "text") ;
const h3 = document.querySelector("h3");
h3.insertAdjacentText("beforebegin", "begin");
h3.insertAdjacentText("afterbegin", "afterbegin");


// selector.insertAdjacentElement()
// thêm các element vào các vị trí 
const strong = document.createElement("strong");
h3.appendChild(strong);
strong.className = "bold";
strong.insertAdjacentElement("afterend", strong);

// thêm các element dài vào HTML
// document.element.insertAdjacentHTML
const element =
`
<ul class = "menu2">
 <li>1</li>
 <li>2</li>
 <li>3</li>
</ul>
`;
// const body = document.querySelector("body");
document.body.insertAdjacentHTML("beforeend", element);


//********************** insertBefor(element caand di chuyển, element trụ cột) ****************** */

// element trụ cột là thẻ để định vị xem là element di chuyển nằm trước hay sau nó



