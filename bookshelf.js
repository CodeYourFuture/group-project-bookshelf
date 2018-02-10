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
        .then(removeBtn)
};

function processBooks(booksJSON) {
    var ul = document.createElement('ul');
    ul.setAttribute('id', 'list');
    booksJSON.forEach(function (item) {
        var li = document.createElement("li");
        li.setAttribute('id', item['id']);
        var upBtn = document.createElement("button");
        var textUpBtn = document.createTextNode("▲");
        upBtn.appendChild(textUpBtn);
        li.appendChild(upBtn);
        var downBtn = document.createElement("button");
        var textDownBtn = document.createTextNode("▼");
        downBtn.appendChild(textDownBtn);
        li.appendChild(downBtn);
        var textNode = document.createTextNode(' - ' + item['title'] + ' by ' + item['author']);
        li.appendChild(textNode);
        ul.appendChild(li);
    });
    ul.addEventListener("click", InlineFunction);
    document.body.appendChild(ul);
};

function removeBtn() {
    var btn = document.getElementById('fetch-books-btn');
    btn.removeEventListener('click', fetchBooks);
    btn.remove();
};

function moveUp(id) {
    if (id === '1') { return }
    var node = document.getElementById('list');
    var target = document.getElementById(id);
    var newNode = +id;
    newNode = newNode - 1;
    newNode = newNode + '';
    var before = document.getElementById(newNode);
    node.insertBefore(target, before);
};

function moveDown(id) {
    if (id === '5') { return }
    var node = document.getElementById('list');
    var target = document.getElementById(id);
    var newNode = +id;
    newNode = newNode + 1;
    newNode = newNode + '';
    var before = document.getElementById(newNode);
    node.insertBefore(target, before);
};

function InlineFunction(event) {
    var findId = event.target.parentElement.id;
    var findText = event.target.textContent;
    if (findText === "▲") {
        moveUp(findId);
    } else {
        moveDown(findId);
    };
};

