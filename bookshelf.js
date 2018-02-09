var button = document.createElement('btn');
button.setAttribute('id', 'fetch-books-btn');
var text = document.createTextNode('Fetch Books');
button.appendChild(text);
button.addEventListener('click', fetchBooks, true);
body.appendChild(button);