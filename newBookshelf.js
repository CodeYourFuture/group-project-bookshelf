createFetchButton = () => {
  // Create fetch button
  button = document.createElement("button");
  button.setAttribute(`id`, `fetch-books-btn`);
  document.body.appendChild(button);
  button.appendChild(document.createTextNode(`Fetch Books`));
  button.addEventListener("click", fetchBooks);
  // Create unordered list tag
  unOrderedList = document.createElement("ul");
  unOrderedList.setAttribute(`id`, `book-list`);
  document.body.appendChild(unOrderedList);
};

reRangeIds = ul => {
  // Re-range li ids
  for (var i = 1; i <= ul.childNodes.length; i++) {
    ul.childNodes[i - 1].id = "li-" + i.toString();
    // Re-range all up and down button ids
    for (var j = 0; j < ul.childNodes[i - 1].childNodes.length; j++) {
      ul.childNodes[i - 1].childNodes[j].id = i.toString();
    }
  }
};

moveUp = event => {
  ul = document.getElementById("book-list");
  li1 = document.getElementById(`li-${event.id}`);
  // When you're not clicking the first li element
  if (event.id != 1) {
    li2 = document.getElementById(`li-${(parseInt(event.id) - 1).toString()}`);
    ul.insertBefore(li1, li2);
  }
  reRangeIds(ul);
};

moveDown = event => {
  ul = document.getElementById("book-list");
  li1 = document.getElementById(`li-${(parseInt(event.id) + 1).toString()}`);
  // When you're not clicking the last li element
  if (event.id != ul.childNodes.length) {
    li2 = document.getElementById(`li-${event.id}`);
    ul.insertBefore(li1, li2);
  }
  reRangeIds(ul);
};

createBook = book => {
  console.log(book);
  unOrderedList = document.getElementById("book-list");
  unOrderedList.innerHTML += `<li id=li-${book.id}><button id=${
    book.id
  } onClick=${"moveUp(this);"}>⬆</button> <button id=${
    book.id
  }  onClick=${"moveDown(this);"}>⬇</button> ${book.title}</li>`;
};

async function fetchBooks() {
  const booksJSON = await fetch(
    "https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json"
  );
  await booksJSON
    .json()
    .then(books => {
      books.map((book, index) => {
        createBook(book);
      });
    })
    .catch(e => console.log(e));
}

