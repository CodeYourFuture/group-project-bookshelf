

window.bookshelf = (function () {
    //create a button and append it to the body
    function createBtn() {
        const fetchBooksBtnEl = document.createElement('button');
        fetchBooksBtnEl.setAttribute('id', 'fetch-books-btn');
        const FetchBooksBtnText = document.createTextNode('Fetch Books');
        fetchBooksBtnEl.appendChild(FetchBooksBtnText);
        //adding event listener to the button
        fetchBooksBtnEl.addEventListener('click', fetchBooks);
        document.body.appendChild(fetchBooksBtnEl);//appending button to the body
    }

    //fetching the books, displaying them on screen and removing the fetch button 
    function fetchBooks() {
        //fetching the books data
        const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
        fetch(booksJSON)
            .then(response => response.json())
            .then(processBooks)//display books on screen
            .then(removeBtn);//remove fetch button

    }
    //creating unordered list and appending the books to that
    function processBooks(books) {
        const bookShelfEl = document.createElement('ul');//creating unordered list
        //adding each book to the unordered list with `id`, `book.title` and `book.author` properties
        books.forEach(book => {
            let bookListEl = `<li id=${book.id - 1}><button>⬆</button><button>⬇</button> ${book.title} by ${book.author}</li>`;
            bookShelfEl.innerHTML += bookListEl;
        });
        document.body.appendChild(bookShelfEl);//appending unordered list to the body
        bookShelfEl.addEventListener('click', moveBooks);//adding even listener to unordered list
    }
    //defining moveBooks event listener function
    function moveBooks(event) {
        if (event.target.textContent === '⬆') {
            moveUp(event.target.parentElement.id);//`id` of list element which is parent of `clicked-UP-button` 
        } else if (event.target.textContent === '⬇') {
            moveDown(event.target.parentElement.id);//`id` of list element which is parent of `clicked-DOWN-button`
        } else {
            alert('wrong selection')//alert the user when clicking out the arrows
        }
    }

    function moveUp(id) {
        const parentEl = document.querySelector('ul');
        const targetEl = document.getElementById(id);//accessing the clicked book with the `id`
        const bookEls = parentEl.children;//all books
        for (let i = 0; i < bookEls.length; i++) {
            //looping through each book and find the index number of clicked book 
            if (bookEls[i].innerText == targetEl.innerText) {
                if (i !== 0) {
                    var index = i - 1; //assigning the index number of previous book
                } else {
                    index = 0 //stop moving up at the top of the list
                }
            }
        }
        const previousEl = bookEls[index];
        parentEl.insertBefore(targetEl, previousEl);

    }

    function moveDown(id) {
        const parentEl = document.querySelector('ul');
        const targetEl = document.getElementById(id);
        const bookEls = parentEl.children;
        for (let i = 0; i < bookEls.length; i++) {
            if (bookEls[i].innerText == targetEl.innerText) {
                if (i !== 4) {
                    var index = i + 1; //assigning the index number of next book
                } else {
                    index = 4 //stop moving down at the bottom of the list
                }
            }
        }
        const nextEl = bookEls[index];
        parentEl.insertBefore(nextEl, targetEl);
    }

    //removing the button
    function removeBtn() {
        const fetchBooksBtn = document.getElementById('fetch-books-btn')
        fetchBooksBtn.removeEventListener('click', processBooks);
        document.body.removeChild(fetchBooksBtn);
    }

    return {
        init: createBtn, removeBtn, fetchBooks, moveUp, moveDown, processBooks
    }
}())




