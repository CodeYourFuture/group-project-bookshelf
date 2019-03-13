function initateApp(){
  var button = setUpFetchButton()
  button.addEventListener("click", fetchBooks);
}

function setUpFetchButton() {
  var button = document.createElement("button");
  button.setAttribute(`id`, `fetch-books-btn`);
  document.body.appendChild(button);
  button.appendChild(document.createTextNode(`Fetch Books`));
  return button
}


function fetchBooks() {
  var booksJSON =
    "https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json";
  fetch(booksJSON)
    .then(response => response.json())
    .then(books => {
      processBooks(books);
    })
    .then(removeBtn)
    .then(organiseShelf);
}

function processBooks(booksJSON) {
  var unorderedList = document.createElement("ul");
  unorderedList.setAttribute("id", "book-list");
  document.body.appendChild(unorderedList);
  booksJSON.forEach(function(book, index) {
    var output = `<button>⬆</button> <button>⬇</button> - ${book.title} by ${
      book.author
    }`;
    var createLi = document.createElement("li");
    createLi.setAttribute("id", index + 1);
    createLi.innerHTML = output;
    unorderedList.appendChild(createLi);
  });
}

function removeBtn() {
  var findBtn = document.getElementById("fetch-books-btn");
  findBtn.removeEventListener("click", fetchBooks);
  findBtn.remove();
}

function moveUp(element) {
  if (element.id !== element.parentElement.firstElementChild.id) {
    return element.parentElement.insertBefore(element, element.previousSibling);
  }
}

function moveDown(element) {
  if (element.id !== element.parentElement.lastElementChild.id) {
    return element.parentElement.insertBefore(element.nextSibling, element);
  }
}

function organiseShelf() {
  var parentUl = document.getElementById("book-list");
  parentUl.addEventListener("click", function(e) {
    if (e.target.textContent === "⬆") {
      moveUp(e.target.parentElement);
    } else if (e.target.textContent === "⬇") {
      moveDown(e.target.parentElement);
    }
  });
}




initateApp()
