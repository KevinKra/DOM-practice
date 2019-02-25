const mainArticle = document.querySelector(".main-article");
const list = document.querySelector("ul");


//CREATE A NEW UL LIST AND POPULATE IT
const newList = document.createElement("ul");
const newLi = document.createElement("li");
const newLi2 = document.createElement("li");

newList.appendChild(newLi);
newList.appendChild(newLi2);

const liEl = document.getElementById("two");
const paragraph = document.querySelector("p");

const liCollection = document.querySelectorAll("li[id]")


//traverse and modify
//notice the whitespace nodes
mainArticle.firstChild.nextSibling.className = "green";
liEl.className = "green";
paragraph.innerHTML += " Hello!!";

mainArticle.appendChild(newList);

changeList();
function changeList() {
  liCollection.forEach( element => {
    element.style.color = "blue"
  })
}



//---explain / use
//nodeValue
//textContent
//innerHTML

//createElement()
//createTextNode()
//appendChild() / removeChild()

//hasAttribute()
//getAttribute()
//removeAttribute()