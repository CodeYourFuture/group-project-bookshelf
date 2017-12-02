/* Button create and click listener */
var button = document.createElement("button");
button.setAttribute("id", "fetch-books-btn");
var buttonText = document.createTextNode("Fetch Books");
button.appendChild(buttonText);
button.addEventListener("click", fetchBooks);
document.body.appendChild(button);

/* fetchBooks function */

function fetchBooks() {
	const books = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
	fetch(books)
    .then(response => response.json())
    .then(processBooks)
    .then(removeBtn)
}

function processBooks(books) {
	var ulTag = document.createElement("ul");


	books.forEach(function(el){
		var newLiElement = document.createElement("li");
		newLiElement.setAttribute("id", el.id);
		
		var upButton = document.createElement("button");
		var upButtonText = document.createTextNode("⬆");
		upButton.appendChild(upButtonText);

		var downButton = document.createElement("button");
		var downButtonText = document.createTextNode("⬇");
		downButton.appendChild(downButtonText);
		
		newLiElement.appendChild(upButton);
		newLiElement.appendChild(downButton);
		var liText = document.createTextNode(" - " + el.title + " by " + el.author);
		newLiElement.appendChild(liText);

		ulTag.appendChild(newLiElement);
	});

	document.body.appendChild(ulTag);

	/*-------------------- Moving elements ---------------------------*/

	function moveUp(id) {
		console.log("Move up" + " " + id);

		// var listItems = document.querySelectorAll("li");
		// for (var i = 0; i < listItems.length; i++) {
		// 	listItems[i].onclick = function() {this.parentNode.removeChild(this);}
		// }
		// this.parentNode.removeChild(this);
	}

	function moveDown(id) {
		console.log("Move down" + " " + id);
		// this.parentNode.removeChild(this);

	}

	document.querySelector("ul").addEventListener("click", function(event){
		if(event.target.textContent === "⬆"){
			moveUp(event.target.parentElement.id);
		} else if(event.target.textContent === "⬇"){
			moveDown(event.target.parentElement.id);
		}
	});
}

function removeBtn() {
	var button = document.getElementById("fetch-books-btn");
	button.removeEventListener("click", fetchBooks);
	button.remove();
}




