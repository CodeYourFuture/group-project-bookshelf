window.bookshelf = (function() {
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


		books.forEach(function(book){
			var newLiElement = document.createElement("li");
			newLiElement.setAttribute("id", book.id);
			
			var upButton = document.createElement("button");
			var upButtonText = document.createTextNode("⬆");
			upButton.appendChild(upButtonText);

			var downButton = document.createElement("button");
			var downButtonText = document.createTextNode("⬇");
			downButton.appendChild(downButtonText);
			
			newLiElement.appendChild(upButton);
			newLiElement.appendChild(downButton);
			var liText = document.createTextNode(" - " + book.title + " by " + book.author);
			newLiElement.appendChild(liText);

			ulTag.appendChild(newLiElement);
		});

		document.body.appendChild(ulTag);

		/*-------------------- Moving elements ---------------------------*/

		function moveUp(id) {
			// console.log("Move up" + " " + id);
			var node = document.getElementById(id);
			var previous = node.previousSibling;
			if(previous === null){ return undefined }
			var parent = node.parentNode;
			var detachedNode = parent.removeChild(node);
			parent.insertBefore(detachedNode, previous);
		}

		function moveDown(id) {
			// console.log("Move down" + " " + id);
			var node = document.getElementById(id);
			var next = node.nextSibling;
			if(next === null){ return undefined }
			var parent = node.parentNode;
			var detachedNode = parent.removeChild(node);
			parent.insertBefore(detachedNode, next.nextSibling);
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
}())





