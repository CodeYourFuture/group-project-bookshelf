window.bookshelf = (function() {
  function createBtn() {
    var btn = document.createElement("button");
    btn.setAttribute("id", "fetch-books-btn");
    var textNode = document.createTextNode("Fetch Books");
    btn.appendChild(textNode);
    btn.addEventListener("click", fetchBooks);
    document.body.appendChild(btn);
  }

  async function fetchBooks() {
    const booksJSON =
      "https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json";
    await fetch(booksJSON)
      .then(response => response.json())
      .then(processBooks)
      .then(removeBtn);
    document.querySelector("ul").addEventListener("click", event => {
      if (event.target.textContent === "⬆") {
        moveUp(event.target.parentElement.id);
      } else {
        moveDown(event.target.parentElement.id);
      }
    });
  }
  function processBooks(booksJSON) {
    var list = document.createElement("ul"); //create unorderedlist

    booksJSON.forEach(function(item) {
      var listItem = document.createElement("li"); //create list items
      listItem.setAttribute("id", item.id);
      var textNode1 = document.createTextNode(
        item.title + " by " + item.author
      ); //create list item text
      //create up-buttom
      var upBtn = document.createElement("button");
      var texUpBtn = document.createTextNode("⬆");
      upBtn.appendChild(texUpBtn);
      listItem.appendChild(upBtn);
      listItem.style.color = "red";
      //create down-button

      var downBtn = document.createElement("button");
      var texDownBtn = document.createTextNode("⬇");
      downBtn.appendChild(texDownBtn);
      listItem.appendChild(downBtn);

      listItem.appendChild(textNode1);
      list.appendChild(listItem);

      document.body.appendChild(list);
    });
  }

  //remvoe fetch-buttom
  function removeBtn() {
    var btn1 = document.getElementById("fetch-books-btn");

    btn1.removeEventListener("click", fetchBooks);
    btn1.remove();
  }
  function moveDown(id) {
    let movedElement = document.getElementById(id);
    if (movedElement.nextSibling != null) {
      movedElement.parentElement.insertBefore(
        movedElement.nextSibling,
        movedElement
      );
    }
  }
  function moveUp(id) {
    let movedElement = document.getElementById(id);
    if (movedElement.previousSibling != null) {
      movedElement.parentElement.insertBefore(
        movedElement,
        movedElement.previousSibling
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
