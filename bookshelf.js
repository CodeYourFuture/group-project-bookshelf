// Creating a button
var btn = document.createElement('button');
btn.setAttribute('id', 'fetch-books-btn');
var textOfBtn = document.createTextNode('Fetch Books');
btn.appendChild(textOfBtn);
document.body.appendChild(btn);
btn.addEventListener('click', fetchBooks);