var button = document.createElement('button');
button.setAttribute('id', 'fetch-books-btn');
var text = document.createTextNode('Fetch Books');
button.appendChild(text);
button.addEventListener('click', fetchBooks);
document.body.appendChild(button);

function fetchBooks() {
    const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
    fetch(booksJSON)
        .then(response => response.json())
        .then(processBooks)
};

function processBooks(booksJSON) {
var ul = document.createElement('ul');
booksJSON.forEach(function(item) {
    var li = document.createElement("li");
    li.setAttribute('id', item['id']);
    var textNode = document.createTextNode(item['title'] + ' by ' + item['author'])
    li.appendChild(textNode);
    ul.appendChild(li);
});
document.body.appendChild(ul);
};