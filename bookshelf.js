//Create and append button to the html
var btn = document.createElement("button");
btn.setAttribute("id", "fetch-books-btn");
var txt = document.createTextNode("Fetch Books");
btn.appendChild(txt);
btn.addEventListener("click", fetchBooks);
document.body.appendChild(btn);

function fetchBooks() {
  const booksJSON =
    "https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json";
  fetch(booksJSON)
    .then(response => response.json())
    .then(processBooks);
}
//Create unordered list

function processBooks(books) {
  var ul = document.createElement("ul");
  books.forEach(function(book) {
    let bookList = ` ${book.title} by ${book.author}</li><br/>`;
    ul.innerHTML += bookList;
    document.body.appendChild(ul);
  });
}
