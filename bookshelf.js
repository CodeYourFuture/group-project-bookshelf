window.bookshelf = (function() {
    function createBtn(){
  const button = document.createElement("button");
 button.setAttribute("id", "fetch-books-btn");
  const buttonText = document.createTextNode("Fetch Books");
  button.appendChild(buttonText);
  button.addEventListener("click", fetchBooks);
  document.body.appendChild(button);
    }
  async function fetchBooks() {
    const booksJSON =
      "https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json";
    await fetch(booksJSON)
    //this return the responses from the API 
      .then(response => response.json())
      // this .then execute the processBook() function
      .then(processBooks)
      // this .then execute the removeBtn() function
      .then(removeBtn);
      //this select the Ul and the eventlistner is triggered when the up or down arrow is  click
    document.getElementsByTagName("ul")[0].addEventListener("click", event => {
      if (event.target.textContent === "⬆") {
        moveUp(event.target.parentElement.id);
      } else {
        moveDown(event.target.parentElement.id);
      }
    });
  }
  const processBooks = (books) =>{
    //create the ul tag
    let html = "<ul>";
    books.forEach(book => {
      //this line of code create the li and the up and down arrow button
      html += `<li id ="${book.id}"><button>⬆</button> <button>⬇</button>${
        book.title
      } by ${book.author} </li>`;
    });
    html += "</ul>";
    document.body.innerHTML += html;
  }
  //this function remove the event listener and also remove the button onclick
  const removeBtn = () => {
    let button= document.getElementById("fetch-books-btn");
    button.removeEventListener("click", fetchBooks);
    button.remove();
  }
  //this function moves the li element up and swap it with the element that is before it according to their id
  const moveUp =(id) =>{
    let movedElement = document.getElementById(id);
    if(movedElement.previousSibling != null){
    movedElement.parentElement.insertBefore(
      movedElement,
      movedElement.previousSibling
    );
    }
  }
  // this function move the li element down and swap it with the element that is after it according to their id
  const moveDown =(id) => {
    let movedElement = document.getElementById(id);
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
    }
})();
