window.bookshelf = (function() {
    // Creating a button
    function createBtn() {
        var btn = document.createElement('button');
        btn.setAttribute('id', 'fetch-books-btn');
        var textOfBtn = document.createTextNode('Fetch Books');
        btn.appendChild(textOfBtn);
        document.body.appendChild(btn);
        btn.addEventListener('click', fetchBooks); //  Wiring up the button
    }
    //## Fetching the books data    

    function fetchBooks() {
        const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
        fetch(booksJSON)
            .then(response => response.json())
            .then(books => processBooks(books))
            .then(() => removeBtn())
    }

    // Creating the bookshelf

    function processBooks(booksJSON) {
        var ulTag = document.createElement('ul');
        document.body.appendChild(ulTag);
        booksJSON.forEach(function(booksItem) {
            var liTag = document.createElement('li');

            var btnUp = document.createElement('button');
            var upText = document.createTextNode('⬆');
            var downText = document.createTextNode('⬇');
            var btnDown = document.createElement('button');
            btnUp.appendChild(upText);
            btnDown.appendChild(downText);
            liTag.appendChild(btnUp);
            liTag.appendChild(btnDown);

            var textOfLi = document.createTextNode(booksItem.title + ' by ' + booksItem.author)
            liTag.setAttribute('id', booksItem.id);
            liTag.appendChild(textOfLi);
            ulTag.appendChild(liTag);
        });
        ulTag.addEventListener('click', function(event) {
            if (event.target.textContent === '⬆') {
                moveUp(event.target.parentElement.id)
            } else if (event.target.innerHTML === '⬇') {
                moveDown(event.target.parentElement.id)
            }
        })
    }

    // ## Removing the button

    function removeBtn() {
        var btnRemove = document.getElementById('fetch-books-btn');
        btnRemove.removeEventListener('click', fetchBooks);
        document.body.removeChild(btnRemove);
    }

    function moveUp(id) {
        var currentLi = document.getElementById(id);
        var beforeCurrentLi = currentLi.previousSibling;
        if (beforeCurrentLi === null) {
            return undefined;
        } else {
            var parentOfCurrentLi = currentLi.parentNode;
            var removeCurrentLi = parentOfCurrentLi.removeChild(currentLi)
            parentOfCurrentLi.insertBefore(removeCurrentLi, beforeCurrentLi)
        }
    }

    function moveDown(id) {
        var selected = document.getElementById(id);
        var afterSelected = selected.nextSibling;
        if (afterSelected === null) {
            return undefined;
        } else {
            var parent = selected.parentNode;
            parent.insertBefore(selected, afterSelected.nextSibling);
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

})()