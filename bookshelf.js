function addTextNode() {
  var button = document.createElement("button");
  button.setAttribute(`id`, `fetch-books-btn`);
  document.body.appendChild(button);
  button.appendChild(document.createTextNode(`Fetch Books`));
  button.addEventListener("click", fetchBooks);
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
  var parentUl = document.getElementById("book-list");

  if (element.id !== parentUl.childNodes[0].id) {
    return element.parentElement.insertBefore(element, element.previousSibling);
  }
}

function moveDown(element) {
  var parentUl = document.getElementById("book-list");
  if (element.id !== parentUl.lastElementChild.id) {
    return element.parentElement.insertBefore(element.nextSibling, element);
  }
}

function organiseShelf() {
  parentUl.addEventListener("click", function(e) {
    if (e.target.textContent === "⬆") {
      moveUp(e.target.parentElement);
    } else if (e.target.textContent === "⬇") {
      moveDown(e.target.parentElement);
    }
  });
}

addTextNode();
