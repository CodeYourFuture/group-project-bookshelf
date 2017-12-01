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
        .then(processBooks => {
                var newUl = document.createElement("UL");
                newUl.setAttribute("id", "myUL");
                document.body.appendChild(newUl);
                processBooks.forEach(function(book){
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
            })
        }

       
