

var button = document.createElement('button');
button.setAttribute("id", "fetch-books-btn");
var textNode = document.createTextNode('Fetch Books');
button.appendChild(textNode);
//button.innerHTML("Fetch Books");
button.addEventListener("click",fetchBooks);

var bookDoc = document.getElementsByTagName("body")[0];
    bookDoc.appendChild(button);


function fetchBooks(){
    const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
    fetch(booksJSON)
        .then(response => response.json())
        .then(function processBooks(booksJSON){
            //var bookArray = Array.from(booksJSON);
            var mainListNode = document.createElement('ul')
            button.addEventListener("click",inlineFunc);
            booksJSON.forEach(function(element) {
                var listNode = document.createElement('li');
                listNode.setAttribute("id",element.id);
                var buttonNode = document.createElement("button");
                var btnTextNode1 = document.createTextNode('⬆');
                var btnTextNode2 = document.createTextNode('⬇');
                var textNode = document.createTextNode(element.title + element.author)
                buttonNode.appendChild(btnTextNode1);
                buttonNode.appendChild(btnTextNode2);
                listNode.appendChild(btnTextNode1);
                listNode.appendChild(btnTextNode2);
                listNode.appendChild(textNode);
                mainListNode.appendChild(listNode); 
                var main = document.getElementsByTagName("body")[0];
                main.appendChild(mainListNode);
                
               
            });
            })
        .then(removeBtn);
}
function removeBtn(){
    var btn = document.getElementById("fetch-books-btn");
    btn.removeEventListener("click",fetchBooks);
    btn.remove();
    
}
// function moveUp(id){
//     console.log(moveUp + id);
// }
// function moveDown(id){
//     console.log(moveDown + id);
// }
function inlineFunc(event){
    if(event.target.textContent === "⬆"){
        moveDown();
    }
    moveUp();
    event.target.parentElement.id;
}

