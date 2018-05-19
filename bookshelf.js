var button1 = document.createElement("Button");        // Create a <button> element
button1.setAttribute("id", "fetch-books-btn");

var buttonText = document.createTextNode("Fetch Books");       // Create a text node
button1.appendChild(buttonText);                                   // Append the text to <button>
button1.addEventListener ("click" , fetchBooks)             //Add event handler
var body = document.getElementsByTagName("body")               // <body><button>id = "fetch-books-btn"</button></body>
document.body.appendChild(button1);                         // Append <button> to <body>

function addElement(){
	var parentUl = document.createElement('ul');  // parent document
	var textForList = document.createTextNode('Hello World') //child document
	parentUl.appendChild(textForList);
	var body = document.getElementsByTagName("body")              
document.body.appendChild(parentUl);  
	}       

addElement();


function fetchBooks(){
       
const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
fetch(booksJSON)
    .then(response => response.json())
    .then(books => {
		/* TODO: create the bookshelf */
				
        var names = ['title','author'];
		var ul = document.createElement('ul');
		//document.getElementById('1').appendChild(ul);
 
		names.forEach(function(name){
			var li = document.createElement('li');
			ul.appendChild(li);
			li.innerHTML += name;
			console.log(name)
		});
        console.log(books)
    })

}

// Write your solution inside the `processBooks` function. The function should create an unordered list containing list items with the author and titles of the books. Each list item should also have an id attribute set to the book id.

// When you click the `Fetch Books` button it should add the following HTML to the webpage.

// ```html
// <ul>
//     <li id="1">The Catcher in the Rye by J. D. Salinger</li>
//     <li id="2">To Kill a Mockingbird by Harper Lee</li>
//     <li id="3">The Grapes of Wrath by John Steinbeck</li>
//     <li id="4">The Great Gatsby by F Scott Fitzgerald</li>
//     <li id="5">Moby-Dick by Herman Melville</li>
// </ul>
// ```

// ### Hint

// Use the [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method to iterate over the books array and create the list items.
