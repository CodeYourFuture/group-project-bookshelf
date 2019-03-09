window.bookshelf = (function () {
  // Move up arrow handler
  moveUp = (tag, id) => {
    console.log(document.getElementById(id).previousSibling)
    tag.insertBefore(
      document.getElementById(id),
      document.getElementById(id).previousSibling
    )
  }
  // Move down arrow handler
  moveDown = (tag, id) => {
    console.log(document.getElementById(id).nextSibling)

    tag.insertBefore(
      document.getElementById(id).nextSibling,
      document.getElementById(id)
    )
  }
  /// creating fetch button and assigning click event
  createBtn = () => {
    var button = document.createElement('button')
    button.setAttribute(`id`, `fetch-books-btn`)
    document.body.appendChild(button)
    const text = document.createTextNode(`Fetch Books`)
    button.appendChild(text)
    button.addEventListener('click', fetchBooks, true)
  }
  removeBtn = () => {
    let button = document.querySelector('button')
    button.removeEventListener('click', fetchBooks, true)
    button.remove()
  }
  // Declaring <ul> and displaying arrow buttons and Books and authors in <li>
  processBooks = books => {
    const ul = document.createElement('ul')
    document.body.appendChild(ul)
    ul.addEventListener('click', event => {
      if (event.target.textContent === '⬆') {
        moveUp(ul, event.target.parentElement.id)
      } else {
        moveDown(ul, event.target.parentElement.id)
      }
    })

    books.forEach(book => {
      var liTag = document.createElement('li')
      liTag.setAttribute('id', book.id)
      ul.appendChild(liTag)
      liTag.innerHTML = `<button>⬆</button>
<button>⬇</button> ${book.title} by ${book.author}`
    })
  }

  async function fetchBooks () {
    const booksJSON = await fetch(
      'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
    )
    const response = await booksJSON
      .json()
      .then(books => processBooks(books))
      .then(removeBtn)
      .catch(e => console.log(e))
  }
  return {
    init: createBtn,
    removeBtn,
    fetchBooks,
    moveUp,
    moveDown
  }
})()
