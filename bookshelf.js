var button = document.createElement('button');
button.setAttribute('id','fetch-books-btn');
var textNode = document.createTextNode('Fetch books');
button.appendChild(textNode);
button.addEventListener('click', fetchBooks);
document.body.appendChild(button);

// var fetchBooks = function() 
function fetchBooks() {
const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
fetch(booksJSON)
    .then(response => response.json())
    .then(processBooks)
     .then(removeBtn)
    .then(books => {
        /* TODO: create the bookshelf */
        console.log(books)
    })
}

function processBooks(booksJSON) {
	var newUl = document.createElement('ul');
	booksJSON.forEach(function(element) {
		var newLi = document.createElement('li');
		newLi.setAttribute('id', element.id);

				//buttons
		var buttonUp = document.createElement('button');
		var textUp = document.createTextNode('⬆');
		buttonUp.appendChild(textUp);
		var buttonDown = document.createElement('button');
		var textDown = document.createTextNode('⬇');
		buttonDown.appendChild(textDown);

		newLi.appendChild(buttonUp);
		newLi.appendChild(buttonDown);

				// text
		var liText = document.createTextNode(' - ' + element.title + ' by ' + element.author);
		newLi.appendChild(liText);	
		newUl.appendChild(newLi);

	});
	document.body.appendChild(newUl);
}
		//remove button 
function removeBtn() {
	var findButton = document.getElementById('fetch-books-btn');
	findButton.removeEventListener('click', fetchBooks);
	findButton.remove();
}