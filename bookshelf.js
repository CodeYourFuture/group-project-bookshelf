window.bookshelf = (function() {
  function createBtn() {
    var btn = document.createElement("button");
    btn.setAttribute("id", "fetch-books-btn");
    var tn = document.createTextNode("click me");
    btn.appendChild(tn);
    btn.addEventListener("click", fetchBooks);
    document.body.appendChild(btn);
    var ul = document.createElement("ul");

    ul.addEventListener("click", event => {
      var targetContent = event.target.textContent;

      var id = event.target.parentElement.id;
      if (targetContent === "⬆") {
        moveUp(id);
      } else if (targetContent === "⬇") {
        moveDown(id);
      }
    });
  }
  function fetchBooks() {
    const booksJSON =
      "https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json";
    fetch(booksJSON)
      .then(response => response.json())
      .then(displayBooks)
      .then(removeBtn);
  }
  /*[
  {
    id: 1,
    title: "The Catcher in the Rye",
    author: "J. D. Salinger"
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee"
  },
  {
    id: 3,
    title: "The Grapes of Wrath",
    author: "John Steinbeck"
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F Scott Fitzgerald"
  },
  {
    id: 5,
    title: "Moby-Dick",
    author: "Herman Melville"
  }
];*/
  function displayBooks(books) {
    var ul = document.createElement("ul");

    books.forEach(book => {
      var upArrow = document.createElement("button");
      //upArrow.setAttribute("id", "up-arrow");
      var tn1 = document.createTextNode("⬆");
      upArrow.appendChild(tn1);
      var downArrow = document.createElement("button");
      //downArrow.setAttribute("id", "down-arrow");
      var tn2 = document.createTextNode("⬇");
      downArrow.appendChild(tn2);

      var li = document.createElement("li");
      book.title + " by " + book.author;
      li.setAttribute("id", book.id);
      li.appendChild(upArrow);
      li.appendChild(downArrow);
      //li.innerText = book.title + " by " + book.author;
      var bookDescription = document.createTextNode(
        book.title + " by " + book.author
      );
      li.appendChild(bookDescription);
      ul.appendChild(li);
    });
    document.body.appendChild(ul);
  }

  function removeBtn() {
    var btn = document.getElementById("fetch-books-btn");
    btn.removeEventListener("click", fetchBooks);
    btn.parentNode.removeChild(btn);
  }

  /* ul.addEventListener("click", event => {
    var targetContent = event.target.textContent;

    var id = event.target.parentElement.id;
    if (targetContent === "⬆") {
      moveUp(id);
    } else if (targetContent === "⬇") {
      moveDown(id);
    }*/

  function moveUp(id) {
    var listItem = document.getElementById(id);
    var previousSibling = listItem.previousSibling;
    if (previousSibling != null) {
      ul.insertBefore(listItem, previousSibling);
      //var insertedNode = parentNode.insertBefore(newNode, referenceNode);
    }
  }
  function moveDown(id) {
    var listItem = document.getElementById(id);
    var nextSibling = listItem.nextSibling;
    if (nextSibling != null) {
      ul.insertBefore(nextSibling, listItem);
    }
    //console.log(id + "moveDown");
  }
  return {
    init: createBtn,
    removeBtn,
    fetchBooks,
    moveUp,
    moveDown,
    displayBooks
  };
})();
