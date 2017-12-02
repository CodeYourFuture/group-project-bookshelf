window.bookshelf = (function() {

    function createBtn() {
        const btnNode = document.createElement('button')
        btnNode.setAttribute('id', 'fetch-books-btn')
        const textNode = document.createTextNode('Fetch Books')
        btnNode.appendChild(textNode)
        btnNode.addEventListener('click', fetchBooks)
        document.body.appendChild(btnNode)
    }

    function removeBtn() {
        const btnNode = document.getElementById('fetch-books-btn')
        btnNode.removeEventListener('click', fetchBooks)
        btnNode.remove()
    }

    function fetchBooks() {
        const booksJSON = 'https://raw.githubusercontent.com/peterthompson/bookshelf-project/master/books.json'
        fetch(booksJSON)
            .then(response => response.json())
            .then(processBooks)
            .then(removeBtn)
    }

    function processBooks(books) {
        const ul = document.createElement('ul')

        books.forEach(({ id, title, author }) => {
            const li = document.createElement('li')
            li.setAttribute('id', id)

            const upBtnNode = document.createElement('button')
            const upTextNode = document.createTextNode('⬆')
            upBtnNode.appendChild(upTextNode)
            li.appendChild(upBtnNode)

            const downBtnNode = document.createElement('button')
            const downTextNode = document.createTextNode('⬇')
            downBtnNode.appendChild(downTextNode)
            li.appendChild(downBtnNode)

            const textNode = document.createTextNode(` - ${title} by ${author}`)

            li.appendChild(textNode)

            ul.appendChild(li)
        })

        document.body.appendChild(ul)

        ul.addEventListener('click', (evt) => {
            const { textContent, parentElement } = evt.target

            if (textContent === '⬆') {
                moveUp(parentElement.id)
            } else if (textContent === '⬇') {
                moveDown(parentElement.id)
            }
        })
    }

    function moveUp(id) {
        const node = document.getElementById(id)
        const prev = node.previousSibling

        if (prev === null) return undefined

        const parent = node.parentNode

        const detachedNode = parent.removeChild(node)

        parent.insertBefore(detachedNode, prev)
    }

    function moveDown(id) {
        const node = document.getElementById(id)
        const next = node.nextSibling

        if (next === null) return undefined

        const parent = node.parentNode

        const detachedNode = parent.removeChild(node)

        parent.insertBefore(detachedNode, next.nextSibling);
    }

    return {
        init: createBtn,
        removeBtn,
        fetchBooks,
        processBooks,
        moveUp,
        moveDown
    }
}())
