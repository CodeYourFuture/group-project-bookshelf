var btn = document.createElement("button");
btn.setAttribute("id", 'fetch-books-btn');
var texNode = document.createTextNode('Fetch Books');
btn.appendChild(texNode);
btn.addEventListener("click", fetchBooks);
var body = document.getElementsByTagName('body')
document.body.appendChild(btn);
function fetchBooks() {
  const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
  fetch(booksJSON)
    .then(response => response.json())
    .then(processBooks)
    .then(removeBtn);
}

function processBooks(booksJSON) {
  var list = document.createElement("ul");
  
  booksJSON.forEach(function (item) {
    var listItem = document.createElement('li');
    listItem.setAttribute('id', item['id']);

    var upButton = document.createElement("button");
    var texUpButton = document.createTextNode("◭");
    upButton.appendChild(texUpButton);
    listItem.appendChild(upButton);

    var downButton = document.createElement("button");
    var texDownButton = document.createTextNode("⧩");
    downButton.appendChild(texDownButton);
    listItem.appendChild(downButton);

    var texNode = document.createTextNode(item['title'] + " by " + item['author']);
    listItem.appendChild(texNode);
    list.appendChild(listItem);
    listItem.addEventListener("click", myInlineFunc);
  })
  document.body.appendChild(list);
  
}

function removeBtn() {
  var rem = document.getElementById("fetch-books-btn")
  rem.removeEventListener("click", fetchBooks);
  btn.remove();
}

function moveUp(id) {
  if(id===1){ return}
  var itm=document.getElementById(id);
  var originalItm=document.getElementById(id).innerHTML;
  itm.innerHTML=document.getElementById(id).previousElementSibling.innerHTML;
  document.getElementById(id).previousElementSibling.innerHTML=originalItm;
}
function moveDown(id) {
  var itm=document.getElementById(id);
  if(id===5){ return}
  var originalItm=document.getElementById(id).innerHTML;
  itm.innerHTML=document.getElementById(id).nextElementSibling.innerHTML;
  document.getElementById(id).nextElementSibling.innerHTML=originalItm;
} 

function myInlineFunc(event) {
  //console.log('myInlineFunc called');
  //console.log('event is: ', event);
  if (event.target.textContent === "◭") {
    moveUp(event.target.parentElement.id);
  } else
    moveDown(event.target.parentElement.id);
}
/* 
var elements = document.getElementsByTagName("button");
console.log(elements)
elements.addEventListener("click", becomeBlue)
function becomeBlue(){
  Array.from(elements).forEach(function(element) {
    element.style.backgroundColor = "blue";
  });
}
document.getElementById("button").style.background='#000000' */

var elem=document.getElementsByTagName('button');
console.log(elem);

elem.addEventListener("click",buttonFunction);
function buttonFunction(btn) {
   btn.style.backgroundColor = "blue";
  //btn.style.color = "red";
}