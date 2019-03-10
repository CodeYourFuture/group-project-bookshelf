// creates new button element
const newButton = document.createElement("button");
// set the attribute for newButton
newButton.setAttribute("id", "fetch-books-btn");
// add text to the button
const buttonText = document.createTextNode("Fetch Books");
// adds the textNode to the created button element
newButton.appendChild(buttonText);
// add button to the document
document.body.appendChild(newButton);
//add the event listener for the button and function
newButton.addEventListener("click", fetchBooks);
// define the function that will respond to the event.
function fetchBooks() {
  const booksJSON =
    "https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json";
  fetch(booksJSON)
    .then(response => response.json())
    .then(json => processBooks(json))
    .then(removeBtn);
}
//...
//....

function processBooks(books) {
  var ulTag = document.createElement("ul");
  document.body.appendChild(ulTag);

  //var li = document.createElement("li");
  books.forEach(book => {
    var li = document.createElement("li");
    var titleNode = document.createTextNode(` ${book.title} by ${book.author}`);
    var bookBtn1 = document.createElement("button");
    bookBtn1.innerText = "⬆";
    var bookBtn2 = document.createElement("button");
    bookBtn2.innerText = "⬇";
    //ptag.innerHTML = book.title;
    //li.innerHTML = book.title;
    li.setAttribute("id", book.id);
    li.appendChild(bookBtn1);
    li.appendChild(bookBtn2);
    li.appendChild(titleNode);
    ulTag.appendChild(li);
  });
}
function removeBtn() {
  // Remove the event handler from <div>
  document
    .getElementById("fetch-books-btn")
    .removeEventListener("click", fetchBooks);
}
