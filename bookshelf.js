/* Button create and click listener */
var button = document.createElement("button"); // create the button
button.setAttribute("id", "fetch-books-btn"); // set id attribute to the button
var buttonText = document.createTextNode("Fetch Books"); //create the button text
button.appendChild(buttonText); // apply buttonText to Button tag
button.addEventListener("click", fetchBooks); // click event trigger
document.body.appendChild(button); //append button to the body element

/* fetchBooks function */

function fetchBooks() {
	const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
	fetch(booksJSON)
    .then(response => response.json())
    .then(processBooks) // call the processBooks function
    .then(removeBtn) // call the removeBtn function
}

function processBooks(booksJSON) {
	var ulTag = document.createElement("ul"); // create <ul> Tag

	// This forEach loop creates several li tags
	booksJSON.forEach(function(el){
		var newLiElement = document.createElement("li"); // create <li> element
		newLiElement.setAttribute("id", el.id); // set id attribute to each <li>
		
		var upButton = document.createElement("button"); //
		var upButtonText = document.createTextNode("⬆"); // CREATE BUTTONS WITH ARROWS UP
		upButton.appendChild(upButtonText);							//

		var downButton = document.createElement("button"); //
		var downButtonText = document.createTextNode("⬇"); // CREATE BUTTONS WITH ARROWS DOWN
		downButton.appendChild(downButtonText);						//
		
		newLiElement.appendChild(upButton); // append up button to <li> element
		newLiElement.appendChild(downButton); // append down button to <li> element
		var liText = document.createTextNode(" - " + el.title); // create text in the <li> from JSON
		newLiElement.appendChild(liText); // apppend text to the <li>

		ulTag.appendChild(newLiElement); // append <li> to <ul>
	});

	document.body.appendChild(ulTag); // append <ul> to the body
}

function removeBtn() {
	var button = document.getElementById("fetch-books-btn"); // get the button with "fetch-books-btn" id
	button.removeEventListener("click", fetchBooks);
	button.remove();
}

function moveUp(id) {
	console.log("Move up" + " " + id);
}

function moveDown(id) {
	console.log("Move down" + " " + id);
}
