var button = document.createElement("button");
button.setAttribute("id","fetch-books-btn");
var text = document.createTextNode("Fetch Books");
button.appendChild(text);


var BE = document.getElementsByTagName('body')[0];
BE.appendChild(button);

button.addEventListener("click",fetchBooks);

function fetchBooks(){
    const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
    fetch(booksJSON)
        .then(response => response.json())
        .then(processBooks)
        .then(removeBtn)
        } 
    var newUl = document.createElement("UL");      
    
    


function processBooks(booksJSON){
    
    newUl.setAttribute("id", "myUL");
    document.body.appendChild(newUl);
            
    booksJSON.forEach(function(book){
    var newLi = document.createElement("LI");
    newLi.setAttribute("id", book.id);
                
    var button1 = document.createElement("button");
    var text1 = document.createTextNode("⬆");
    button1.setAttribute("class", 'moveUp');
    button1.appendChild(text1);
                       

    var button2 = document.createElement("button");
    var text2 = document.createTextNode("⬇");
    button2.setAttribute("class", 'moveDown');
    button2.appendChild(text2);
                    

    var t = document.createTextNode(`- ${book.title} by ${book.author}`);
    newLi.appendChild(button1);
    newLi.appendChild(button2);
    newLi.appendChild(t);
    newUl.appendChild(newLi);
                })
            }

function removeBtn(){
    var btt = document.getElementById('fetch-books-btn');
    btt.addEventListener("click", fetchBooks);
    btt.remove();
}


function moveUp(id){
    console.log(moveUp.id);
}

function moveDown(id){
    console.log(moveDown.id);
}

newUl.addEventListener('click', function(event){
    if(event.target.textContent === '⬆'){
        moveUp(event.target.parentElement.id);
    }
    if(event.target.textContent === '⬇'){
        moveDown(event.target.parentElement.id);
    }
})




// Implement the moveUp and moveDown buttons with what 
// you have learnt from the lesson. You will need to use the insertBefore method.













