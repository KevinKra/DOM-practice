const mainArticle = document.querySelector(".main-article");
const list = document.querySelector("ul");


//1
/* Cache the list element with the id "two" then 
add the class name "greenify" to it.*/
const liElement = document.getElementById("two");
liElement.className = "greenify";

//2
/* Cache the (first/only)paragraph element and append it with a string */
const paragraph = document.querySelector("p");
paragraph.innerHTML += " Hello!!!";


//3
/* Practice traversing and modifying the DOM using the following properties:

//traverse all nodes
.firstChild
.lastChild
.nextSibling
.previousSibling
.parentNode

//traverse only elements 
.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement

//modify
.innerText
.innerHTML
.textContent

notice the differences*/
mainArticle.firstChild.nextElementSibling.nextElementSibling.className = "greenify";



//4
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



//5
/* Use querySelectorAll to create an HTML collection of all
list elements that have any id attribute. Change the color 
of these selected elements to blue */
const liCollection = document.querySelectorAll("li[id]")
changeList();
function changeList() {
  liCollection.forEach( element => {
    element.style.color = "blue"
  })
}


//6
/* Cache the form input, then walk the DOM until you reach the italic
"your" in the label. Modify it in some way. */
const userInput = document.querySelector("#user-inputs");
userInput.firstChild.nextSibling.firstChild.nextSibling.style.color = "red";
//or
userInput.firstElementChild.firstChild.nextSibling.innerText = "my";


//7
/* Targeting the same cached selection userInput, change the last word
of the label sentence */
userInput.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nodeValue = " ID"



//8 
/* target the "favorite superhero" p tag (dont cache the selection) and change the text content */
document.getElementById("favorite-superhero").textContent = "Worst Superhero"










