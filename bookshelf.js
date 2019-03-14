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
async function fetchBooks() {
  const booksJSON =
    "https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json";
  await fetch(booksJSON)
    .then(response => response.json())
    .then(json => {
      processBooks(json);
      processSelection();
    })
    .then(removeBtn);
}
// function to detect and process clicked button
function processSelection(e) {
  document.getElementsByTagName("ul")[0].addEventListener("click", function(e) {
    const id = e.target.parentElement.id;
    const clickedBtnText = e.target.textContent;
    if (clickedBtnText === "⬆") {
      moveUp(id);
    } else {
      moveDown(id);
    }
  });
}
// function to add HTML tags to each book and put them in unordered list
function processBooks(books) {
  var ulTag = document.createElement("ul");
  document.body.appendChild(ulTag);
  books.forEach(book => {
    var li = document.createElement("li");
    var titleNode = document.createTextNode(` ${book.title} by ${book.author}`);
    var bookBtn1 = document.createElement("button");
    bookBtn1.textContent = "⬆";
    var bookBtn2 = document.createElement("button");
    bookBtn2.textContent = "⬇";
    li.setAttribute("id", book.id);
    li.appendChild(bookBtn1);
    li.appendChild(bookBtn2);
    li.appendChild(titleNode);
    ulTag.appendChild(li);
  });
}
function removeBtn() {
  // Removes the event handler
  document
    .getElementById("fetch-books-btn")
    .removeEventListener("click", fetchBooks);
}

function moveUp(id) {
  // moves books up the list
  const clickedLi = document.getElementById(id);
  if (clickedLi.previousSibling != null) {
    clickedLi.parentElement.insertBefore(clickedLi, clickedLi.previousSibling);
  }
}

function moveDown(id) {
  // moves books down the list
  const clickedLi = document.getElementById(id);
  if (clickedLi.nextSibling != null) {
    clickedLi.parentElement.insertBefore(clickedLi.nextSibling, clickedLi);
  }
}
