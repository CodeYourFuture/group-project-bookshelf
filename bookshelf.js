var btn = document.createElement("button");
btn.setAttribute("id",'fetch-books-btn');
var texNode=document.createTextNode('Fetch Books');
btn.appendChild(texNode);
btn.addEventListener("click",fetchBooks);
var body = document.getElementsByTagName('body')
document.body.appendChild(btn);
function fetchBooks() {
    const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
fetch(booksJSON)
    .then(response => response.json())
    .then(processBooks)
    .then(removeBtn);
  }
  
  function processBooks(booksJSON){
    //var list=document.createElement("ul");
    /* var listItem=document.createElement("li");
    list.appendChild(listItem); */
    booksJSON.forEach(function(item){
       /*  var listElement = '';
        listElement += '<li>' + item['title'] + "by" + item['author'] + '</li>';
        listElement.setAttribute('id',item['id']); */
        var listItem=document.createElement('li');
        listItem.setAttribute('id',item['id']);
        var texNode=document.createTextNode(item['title'] + "by" + item['author']);
        listItem.appendChild(texNode);

        var list=document.createElement("ul");
        list.appendChild(listItem);
        document.body.appendChild(list);
        return listItem;
})
  }
  function removeBtn()
  {
    var rem=document.getElementById("fetch-books-btn")
    rem.removeEventListener("click",fetchBooks);
    btn.remove();
  }