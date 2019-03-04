window.bookshelf = (function () {
  var button = '';
  moveUp = (id) => {
    ul.insertBefore(document.getElementById(id), document.getElementById(id - 1))
  }
  moveDown = (id) => {
    ul.insertBefore(document.getElementById(id - 1), document.getElementById(id))
  }
  createBtn = () => {
    button = document.createElement('button')
    button.setAttribute(`id`, `fetch-books-btn`)
    document.body.appendChild(button)
    const text = document.createTextNode(`Fetch Books`)
    button.appendChild(text)
    button.addEventListener('click', fetchBooks())
  } 
  removeBtn = () => {
    button.removeEventListener('click', fetchBooks, true)
    button.remove()
  }
  
  const ul = document.createElement('ul')
  document.body.appendChild(ul)
  ul.addEventListener('click', (event) => {
    if (event.target.textContent === '⬆') {
      moveUp(event.target.parentElement.id)
    } else {
      moveDown(event.target.parentElement.id)
    }
  })
  async function fetchBooks() {
    const booksJSON = await fetch('https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json')
    const response = await booksJSON.json()
      .then(books => {
        let count = 1
        books.forEach(book => {
          var liTag = document.createElement('li')
          liTag.setAttribute('id', count)
          ul.appendChild(liTag)
          liTag.innerHTML = `<button>⬆</button>
    <button>⬇</button> ${book.title} by ${book.author}`
          count++
        });
      })
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
}())
bookshelf;


