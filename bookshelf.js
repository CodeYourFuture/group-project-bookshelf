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
    // if (id === '1') { return }
    var node = document.getElementsByTagName('ul');
    var target = document.getElementById(id);
    var attr = target.getAttribute('id');
    var prevId = target.previousSibling;
    var compare = document.getElementsByTagName('ul')[0].firstChild;
    var attrprev = compare.getAttribute('id');
    if (attr === attrprev) { return }
    node[0].insertBefore(target, prevId);
};

function moveDown(id) {
    var node = document.getElementsByTagName('ul');
    var target = document.getElementById(id);
    var attr = target.getAttribute('id');
    var nextId = target.nextSibling;
    var compare = document.getElementsByTagName('ul')[0].lastChild;
    var attrprev = compare.getAttribute('id');
    if (attr === attrprev) { return }
    node[0].insertBefore(nextId, target);
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

