var button1 = document.createElement("Button");        // Create a <button> element
button1.setAttribute("id", "fetch-books-btn");

var textNode = document.createTextNode("Fetch Books");       // Create a text node
button1.appendChild(textNode);                                   // Append the text to <button>
button1.addEventListener ("onClick" , fetchBooks)             //Add event handler
var body = document.getElementsByTagName("body")               // <body><button>id = "fetch-books-btn"</button></body>
document.body.appendChild(button1);                         // Append <button> to <body>

       




function fetchBooks(){
    
    console.log(fetchBooks);
}

// ## Wiring up the button

// 1. Create a new function named `fetchBooks`.
// 2. Inside the `fetchBooks` function add a console log statement.
// 3. Refresh the webpage and click the `Fetch Books` button. You should see the statement appear in the console.
// 4. If it everything has worked delete the console log statement else try and debug what has gone wrong, retracing the steps if needed.

// In the next stage we will fetch the data for the books.