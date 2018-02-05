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
    .then(removeBtn)
    .then(myInlineFunc);
}

function processBooks(booksJSON) {
  //var list=document.createElement("ul");
  /* var listItem=document.createElement("li");
  list.appendChild(listItem); */
  var list = document.createElement("ul");
  list.addEventListener("click", myInlineFunc)
  booksJSON.forEach(function (item) {
    /*  var listElement = '';
     listElement += '<li>' + item['title'] + "by" + item['author'] + '</li>';
     listElement.setAttribute('id',item['id']); */
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
    document.body.appendChild(list);
  })
  //document.body.appendChild(list);
}
function removeBtn() {
  var rem = document.getElementById("fetch-books-btn")
  rem.removeEventListener("click", fetchBooks);
  btn.remove();
}

function moveUp(id) {
  console.log("move up" + id)
  var itm=document.getElementById("id")
  var itmTex=itm.textContent 
  itmTex = itm.parentElement.textContent;
}
function moveDown(id) {
  console.log("move down" + id)
  var itm=document.getElementById("id")
  var itmTex=itm.textContent 
  itmTex = itm.parentElement.textContent;
} 

function myInlineFunc(event) {
  if (event.target.textContent === "◭") {
    moveUp(event.target.parentElement.id);
  } else
    moveDown(event.target.parentElement.id);
}