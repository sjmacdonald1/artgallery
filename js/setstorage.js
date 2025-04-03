document.querySelector('#img1').addEventListener('click', one, false);
document.querySelector('#img2').addEventListener('click', two, false);
document.querySelector('#img3').addEventListener('click', three, false);
document.querySelector('#img4').addEventListener('click', four, false);

function one()  {
    "use strict";
	localStorage.clear();
    localStorage.setItem("name","sailboat");
	localStorage.setItem("price","1,950.00");
	localStorage.setItem("title","Sunset at Venice Beach");
	localStorage.setItem("text","A calming scene of a sailboat sailing slowly through Venice Bay on calm sea by Venice, Florida at sunset");
}

function two()  {
    "use strict";
	localStorage.clear();
	localStorage.setItem("name", "gothic");
	localStorage.setItem("price", "1,599.00");
	localStorage.setItem("title", "American Gothic");
	localStorage.setItem("text", "A farmer and his wife follow their traditional values and lifestyle during the Dust Bowl and Great Depression");
}

function three()  {
    "use strict";
	localStorage.clear();
	localStorage.setItem("name","chinese");
	localStorage.setItem("price","2,199.00");
	localStorage.setItem("title","Traditional Chinese River Scene");
	localStorage.setItem("text","A beautiful river scene painted in the Chinese landscape style popularized during the Five Dynasties period c900 AD");
}

function four()  {
    "use strict";
	localStorage.clear();
	localStorage.setItem("name","gond");
	localStorage.setItem("price","1,799.00");
	localStorage.setItem("title","Two Deer Standing by a Tree");
	localStorage.setItem("text","Deer Painted in the Gond tribal style of Madhya Pradesh, India. It depicts nature and everyday life in vivid colors");
}

