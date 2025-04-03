var namepix  = localStorage.getItem("name");
var price = localStorage.getItem("price");
var title = localStorage.getItem("title");
var text  = localStorage.getItem("text");
document.querySelector("#addtitle").innerHTML = title;
document.querySelector("#addtext").innerHTML = text;
document.querySelector("#addimage").innerHTML = "<img src='images/" +namepix+ ".png' width='100%' height='auto'>"; 
document.querySelector("#addprice").innerHTML = price;  