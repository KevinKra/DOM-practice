const mainArticle = document.querySelector(".main-article");
const list = document.querySelector("ul");

//2
/* Create an unordered list, create two list elements
place the second list element before the first list element.
Append unordered list to mainArticle */  
const newUl = document.createElement("ul");

const newLi = document.createElement("li");
const newLiText = document.createTextNode("List one");
newLi.appendChild(newLiText);
newUl.appendChild(newLi);

const newLi2 = document.createElement("li");
const newLiText2 = document.createTextNode("List two");
newLi2.appendChild(newLiText2);
newUl.insertBefore(newLi2, newUl.firstChild);

mainArticle.appendChild(newUl);




const liEl = document.getElementById("two");
const paragraph = document.querySelector("p");

const liCollection = document.querySelectorAll("li[id]")


//traverse and modify
//notice the whitespace nodes
mainArticle.firstChild.nextSibling.className = "green";
liEl.className = "green";
paragraph.innerHTML += " Hello!!";
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