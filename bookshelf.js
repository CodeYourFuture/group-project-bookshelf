window.bookshelf = (function() {
    /* Our code goes here */
	
function createBtn(){
var button1 = document.createElement("Button");        // Create a <button> element
button1.setAttribute("id", "fetch-books-btn");

var buttonText = document.createTextNode("Fetch Books");       // Create a text node
button1.appendChild(buttonText);                                   // Append the text to <button>
button1.addEventListener ("click" , fetchBooks)             //Add event handler
var body = document.getElementsByTagName("body")               // <body><button>id = "fetch-books-btn"</button></body>
document.body.appendChild(button1);                         // Append <button> to <body>
}
// function addElement(){
// 	var parentUl = document.createElement('ul');  // parent document
// 	var textForList = document.createTextNode('Hello World') //child document
// 	parentUl.appendChild(textForList);
// 	var body = document.getElementsByTagName("body")              
// document.body.appendChild(parentUl);  
// 	}       

// addElement();


function fetchBooks(){
       
const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
fetch(booksJSON)
    .then(response => response.json())
    .then(books => {
		/* TODO: create the bookshelf */
				
			   var createAulTag = document.createElement('ul');
			     createAulTag.addEventListener("click", function(){
					
			
					var upNdown = event.target.textContent
					if (upNdown === "↑"){
						moveUp(event.target.parentElement.id)
				
						console.log(upNdown)
					}
					else if (upNdown === "↓"){
						moveDown(event.target.parentElement.id)
					}
	console.log(event)
				 })
				document.body.appendChild(createAulTag);

			
		books.forEach(function(book){
			
			var li = document.createElement('li')
			li.setAttribute('id', book.id);
			createAulTag.appendChild(li);
			li.innerHTML += '<button >&uarr;</button>'+ '<button>&darr;</button>'+ book.title + ' by ' +  book.author;
			
			console.log(book)


		})
		
     
		console.log(books)
		
	 })
	 .then(removeBtn());
	
}
function removeBtn(){

		
	var button1 = document.getElementById("fetch-books-btn")
	//document.getElementById("fetch-books-btn").style.visibility="hidden";
	button1.remove();
	button1.removeEventListener ("click", fetchBooks) 
	
	
}

function moveUp(id){

	if(id==='1'){ return}
	 var title=document.getElementById(id);
	 var listOrder=document.getElementById(id).innerHTML;
	title.innerHTML=document.getElementById(id).previousElementSibling.innerHTML;
	document.getElementById(id).previousElementSibling.innerHTML=listOrder;

	
console.log(moveUp);


}

function moveDown(id){
	if(id==='5'){ return}
	var title=document.getElementById(id);
  var listOrder=document.getElementById(id).innerHTML;
	title.innerHTML=document.getElementById(id).nextElementSibling.innerHTML;
	document.getElementById(id).nextElementSibling.innerHTML=listOrder;
	
	console.log(moveDown);
	
	}
	return {
        init: createBtn
    }
return {
    init: createBtn,
    removeBtn,
    fetchBooks,
    moveUp,
    moveDown
    
}
}())	
