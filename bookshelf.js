window.bookshelf = (function() {
        function createBtn(){
                var btn = document.createElement("button")
                btn.setAttribute('id', 'fetch-books-btn')
                var text = document.createTextNode('Fetch Books')
                btn.appendChild(text)
                btn.addEventListener('click', fetchBooks)
                document.body.appendChild(btn)
        }
        
        
        function fetchBooks() {
                const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
                fetch(booksJSON)
                .then(response => response
                        .json())
                        .then(processBooks)
                        .then(removeBtn)
        }
        
        function processBooks(books) {
                var listNode = document.createElement('ul')
                books.forEach(function(book) {
                        var liNode = document.createElement('li')
                        liNode.setAttribute('id', book.id)
                        var btnup = document.createElement('button')
                        btnup.setAttribute('id', 'moveUp')
                        var btnuptextNode = document.createTextNode('⬆')
                        btnup.appendChild(btnuptextNode)
                        
                        liNode.appendChild(btnup)
        
                        var btndown = document.createElement('button')
                        btndown.setAttribute('id', 'moveDown')
                        var btndowntextNode = document.createTextNode('⬇')
                        btndown.appendChild(btndowntextNode)
                        
                        liNode.appendChild(btndown)
                        var textNode = document.createTextNode(' - ' + book.title + ' by ' + book.author)
                        liNode.appendChild(textNode)
                        listNode.appendChild(liNode)
        
                       
                })
                listNode.addEventListener('click', function(event){

                             if (event.target.innerHTML === '⬆') {
                                        moveUp(event.target.parentNode.id)
                            } else if (event.target.innerHTML=== '⬇') {
                                        moveDown(event.target.parentNode.id)
                            }
                })

                document.body.appendChild(listNode)

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

        function removeBtn() {
                var btn = document.getElementById('fetch-books-btn')
                btn.removeEventListener('click', fetchBooks)
                btn.remove()
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
