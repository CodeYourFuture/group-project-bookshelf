// Creating a button
var Button  = document.createElement("Button");        // Create a <button> element
Button .setAttribute("id", "fetch-books-btn"); // gives the btn ID of Fetch Books
// Button.id="fetch-books-btn"; //gives the btn ID of Fetch Books

var textNode = document.createTextNode("Fetch Books");   // Create a text node
Button.appendChild(textNode);  // Append the textNode to <button>

Button.addEventListener ("click" , fetchBooks); //Add eventListner

var body = document.createElement("Body")   // create the element <body>
document.body.appendChild(Button); // Append <button> to <body>


// Wiring up the button  and Fetching the books data    
function fetchBooks() {         //create afunction
    // console.log(1,2,3);
    const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
    fetch(booksJSON)
      .then(response => response.json())
      .then(books => {
  // console.log(books)
  
  var body=document.getElementsByTagName("body")[0]; //create a tagName
    var ul = document.createElement("ul"); //create an <ul>
     ul.id="unorderedList";
    ul.addEventListener("click", function(event){ //add event Listener to the <ul>
      

      // if (event.target.textContent === "◭") {
      //   moveUp(event.target.parentElement.id);
      // } else
      var upOrDown =event.target.textContent;
      if(upOrDown === "▲"){
        moveUp(event.target.parentNode.id)
        // upOrDown(event.target.parentNode.id)
      }

      // console.log(event.target.parentElement.id)
      // console.log(event.target.author)
      // console.log(event.target)
    })
  body.appendChild(ul); //append the <ul> to body
  
  books.forEach(function(book){  //create function using forEach
    console.log(book)
    var ItemOnList=document.createElement("li"); //create the <li>   
    ItemOnList.id= "1"; //create the id

    var buttonUP=document.createElement("Button")  // Create a button
    var buttonTextNode=document.createTextNode("▲") //createTextNode
    buttonUP.appendChild(buttonTextNode); //append textNode to the button
    ItemOnList.appendChild(buttonUP)  //append buttonDown to the <li>
 

    var buttonDown=document.createElement("Button") // Create a button
    var buttonTextNode2=document.createTextNode("▼") //createTextNode
    buttonDown.appendChild(buttonTextNode2); //append textNode to the button
    ItemOnList.appendChild(buttonDown) //append buttonDown to the <li>
    
   var Textnode=document.createTextNode(book.title) //createTextNode and get title
     ItemOnList.appendChild(Textnode); //append textNode to  ItemOnList
     ul.appendChild(ItemOnList)// append <ul> to ItemOnList


     console.log(fetchBooks)
  })

      })
      .then(removeBtn())
  }

  function removeBtn(){
    document.getElementById("fetch-books-btn")// Get Elemement with id fetch-books-btn
  document.removeEventListener( "Click", fetchBooks, true) //addEventListener to FetchBooks
  Button.remove(); //remove button 
  }
  
  function moveUp(id){
    console.log(moveDown)
    
      if(id===1){ return}
    var itm=document.getElementById(id)//Get the List item by ID
    var originalItm=document.getElementById(id).innerHTML; //get the content of the original item
    itm.innerHTML=document.getElementById(id).nextElementSibling.innerHTML;//Get the text content
    document.getElementById(id).nextElementSibling.innerHTML=originalItm; 
   
  }
  
  function moveDown(id){
    console.log(moveup)

    if(id===5){ return}
 var itm=document.getElementById(id); //Get the List item by ID
 var originalItm=document.getElementById(id).innerHTML; //get the content of the original item
 itm.innerHTML=document.getElementById(id).previousElementSibling.innerHTM.innerHTML; //Get the text content
 document.getElementById(id).previousElementSibling.innerHTM.innerHTML=originalItm;
}
        