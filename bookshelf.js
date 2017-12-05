
//1-In our bookshelf.js file create a button using the createElement method.

var btn = document.createElement("button");
document.body.appendChild(btn);

//2-Set the button's id attribute to fetch-books-btn using the setAttribute method.

btn.setAttribute("id", "fetch-books-btn");

//3-Create a text node with the text Fetch Books using the createTextNode method.

var newtext = document.createTextNode("fetchBooks");

//4-Append the text node to the button using the appendChild method.   

btn.appendChild(newtext);

//5-Add an event listener that will call a method called 
//fetchBooks when the button is clicked using the addEventListener method.

btn.addEventListener('click', fetchBooks);   

                                       // Wiring up the button

//1-Create a new function named fetchBooks

// function fetchBooks(){
// }
// console.log ("hello")

                                     //Fetching the books data

                                     //1-Create a new function named fetchBooks

function fetchBooks(){
    const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
    fetch(booksJSON)
        .then(response => response.json())
        .then(books => {
            /* TODO: create the bookshelf */
            console.log(books)
        })  
}

                               //Creating the bookshelf
 

function processBooks(booksJSON){
    fetch(booksJSON)
        .then(response => response.json())
        .then(processBooks)

}

const list = document.createElement("ul");
document.body.appendChild(list);

booksJSON.forEach(function(booksITEM) {
    let listTwo = document.createElement("li");
    document.body.appendChild(listtwo); 
    console.log(books);
});

