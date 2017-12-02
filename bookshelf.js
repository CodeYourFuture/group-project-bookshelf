var btn = document.createElement("button")
btn.setAttribute('id', 'fetch-books-btn')
var text = document.createTextNode('Fetch Books')
btn.appendChild(text)
btn.addEventListener('click', FetchBooks)
document.body.appendChild(btn)

function FetchBooks() {
        const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
        fetch(booksJSON).then(response => response.json()).then(processBooks).then(removeBtn)
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
                btnup.addEventListener('click', moveUp)
                liNode.appendChild(btnup)
                
                var btndown = document.createElement('button')
                btndown.setAttribute('id', 'moveDown')
                var btndowntextNode = document.createTextNode('⬇')
                btndown.appendChild(btndowntextNode)
                btndown.addEventListener('click', moveDown)
                liNode.appendChild(btndown)
                var textNode = document.createTextNode(' - ' + book.title + ' by ' + book.author)
                liNode.appendChild(textNode)
                listNode.appendChild(liNode)

                function moveUp() {
                        var x = document.getElementById("moveUp")
                        liNode.addEventListener('click', function(event) {
                                var parent = event.target.parentNode;
                                var n = (parent.getAttribute('id'))
                        })
                }

                function moveDown() {
                        var xd = document.getElementById("moveDown")
                        liNode.addEventListener('click', function(event) {
                                var parent = event.target.parentNode;
                                var nd = (parent.getAttribute('id'))
                        })
                }
        })
        document.body.appendChild(listNode)
}

function removeBtn() {
        var btn = document.getElementById('fetch-books-btn')
        btn.removeEventListener('click', FetchBooks)
        btn.remove()
}