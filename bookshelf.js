window.bookshelf = (function() {
	var buttonNode = document.createElement("button");
	buttonNode.setAttribute("id", 'fetch-books-btn');
	var textNode = document.createTextNode("Fetch books");
	buttonNode.appendChild(textNode);
	buttonNode.addEventListener("click", fetchBooks);
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(buttonNode);

	//function createBtn() {
		function fetchBooks() {
			const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
			fetch(booksJSON).then(response => response.json()).then(processBooks => {
				var x = document.createElement("UL");
				x.setAttribute("id", "myUL");
				document.body.appendChild(x);
				processBooks.forEach(function(xz) {
					var y = document.createElement("LI");
					y.setAttribute("id", xz.id);
					var b = document.createElement("button");
					var bu = document.createTextNode("⬆");
					b.setAttribute("class", 'moveUp');
					b.appendChild(bu);
					 b.addEventListener("click", moveUp);
					var but = document.createElement("button");
					var butto = document.createTextNode("⬇");
					but.setAttribute("class", 'moveDown');
					but.appendChild(butto);
					but.addEventListener("click",moveDown );
					var t = document.createTextNode(` -  ${xz.title} by ${xz.author}`);
					y.appendChild(b);
					y.appendChild(but);
					y.appendChild(t);        
                    x.appendChild(y);
                    
					x.addEventListener('click', function(e) {
						var clicked = e.target;
						var li = clicked.parentNode;
						//var next = li.nextElementSibling;
						//if (next != null) next = next.nextElementSibling;
						//var prev = li.previousElementSibling;
						// if (prev != null) prev = prev.previousElementSibling;
						if (clicked.className === 'moveDown') {
							x.insertBefore(li, xz.id.nextSibling);
                        }
                         else if (clicked.className === 'moveUp') {
							x.insertBefore(li, xz.id.previousSibling);
						}
                    });
					function moveUp(){
                      console.log(`move up ${xz.id}`);
                     
					}
					function moveDown(){
                        console.log(`move down ${xz.id}`);
                    }
                
				})
            })
            .then(removeBtn => {
				element = document.getElementById('fetch-books-btn');
				element.removeEventListener("click", fetchBooks, false)
				element.remove()
			})
		}
	
	// return {
	// 	init: createBtn,
	// 	removeBtn,
	// 	fetchBooks,
	// 	moveUp,
	// 	moveDown,
	// 	processBooks
	// }
}())


