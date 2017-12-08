

var button = document.createElement('button');
button.setAttribute("id", "fetch-books-btn");
var textNode = document.createTextNode('Fetch Books');
button.appendChild(textNode);
button.addEventListener("click",fetchBooks);
var bookDoc = document.getElementsByTagName("body")[0];
    bookDoc.appendChild(button);


function fetchBooks(){
    const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
    fetch(booksJSON)
        .then(response => response.json())
        .then(processBooks)
        .then(removeBtn);
}
        function processBooks(books){
            var mainListNode = document.createElement('ul')
            
            books.forEach(function(element) {
                var listNode = document.createElement('li');
                listNode.setAttribute("id",element.id);
                var buttonNode1 = document.createElement('button');
                var btnTextNode1 = document.createTextNode('⬆');
                buttonNode1.appendChild(btnTextNode1);
                var buttonNode2 = document.createElement('button');
                var btnTextNode2 = document.createTextNode('⬇');
                buttonNode2.appendChild(btnTextNode2);
                var textNode = document.createTextNode('- '+ element.title + ' by ' + element.author)

                listNode.appendChild(buttonNode1);
                listNode.appendChild(buttonNode2);
                listNode.appendChild(textNode);
                mainListNode.appendChild(listNode); 
               

 
            

					
            });


            document.body.appendChild(mainListNode);
            
            mainListNode.addEventListener('click', function(event) {
                if(event.target.textContent === "⬆"){
                    moveUp(event.target.parentElement.id);
                } else if(event.target.textContent === "⬇"){
                    moveDown(event.target.parentElement.id);
        }
            });
            function moveUp(id) {
                const node = document.getElementById(id)
                const prev = node.previousSibling;
        
                if (node.previousSibling === null) return undefined
        
                const parent = node.parentNode
        
                const detachedNode = 
        
                parent.insertBefore(parent.removeChild(node), node.previousSibling)
            }
        
            function moveDown(id) {
                const node = document.getElementById(id)
                const next = node.nextSibling
        
                if (next === null) return undefined
        
                const parent = node.parentNode
        
                const detachedNode = parent.removeChild(node)
        
                parent.insertBefore(detachedNode, next.nextSibling);
        }
            }

function removeBtn(){
    var btn = document.getElementById("fetch-books-btn");
    btn.removeEventListener("click",fetchBooks);
    btn.remove();
    
}
