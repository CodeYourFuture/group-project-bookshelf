window.bookshelf = (function() {
  function createBtn() {
    var btn = document.createElement("Button");
    btn.setAttribute("id", "fetch-books-btn");
    var btnText = document.createTextNode("Fetch Books");
    btn.appendChild(btnText);
    btn.addEventListener("click", fetchBooks);
    document.body.appendChild(btn);
  }
  async function fetchBooks() {
    const booksJSON =
      "https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json";
    try {
      await fetch(booksJSON)
        .then(response => response.json())
        .then(processBooks)
        .then(removeBtn);
    } catch (err) {
      alert(`${err}`);
    }
    //getting the ul  is  which the parent of the list and it's children
    document.getElementsByTagName("ul")[0].addEventListener("click", event => {
      if (event.target.textContent === "⬆") {
        moveUp(event.target.parentElement.id);
      } else if (event.target.textContent === "⬇") {
        moveDown(event.target.parentElement.id);
      }
    });
  }

  function processBooks(books) {
    let html = "<ul>";
    books.forEach(book => {
      html += `<li id = "${book.id}">  <button>⬆</button> <button>⬇</button> ${
        book.title
      } by  ${book.author} </li>`;
    });
    document.body.innerHTML += html + "</ul>";
  }

  function removeBtn() {
    let removedBtn = document.getElementById("fetch-books-btn");
    removedBtn.removeEventListener("click", fetchBooks);
    removedBtn.remove();
  }

  //The function moveUp move the selected element up the list by swaping it with the before it.
  function moveUp(id) {
    let movedElement = document.getElementById(id);
    //checking if our movedElement is the first element in the list or not  depending on the value of the previous sibling, if it's the first element it should not do anything
    if (movedElement.previousSibling != null) {
      movedElement.parentElement.insertBefore(
        movedElement,
        movedElement.previousSibling
      );
    }
  }
  //The function moveDown move the selected element down the list by swaping it with the after it.
  function moveDown(id) {
    let movedElement = document.getElementById(id);
    //checking if our movedElement is the last element in the list or not  depending on the value of the next sibling, if it's the last element it should not do anything
    if (movedElement.nextSibling != null) {
      movedElement.parentElement.insertBefore(
        movedElement.nextSibling,
        movedElement
      );
    }
  }

  return {
    init: createBtn,
    removeBtn,
    fetchBooks,
    moveUp,
    moveDown,
    processBooks
  };
})();
