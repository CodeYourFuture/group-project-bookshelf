/*
```html
<li id="1">
    <button>⬆</button>
    <button>⬇</button>
    - The Catcher in the Rye by J. D. Salinger
</li>
```
2. Create a function named `moveUp` that accepts a parameter called `id` and contains 
a console log statement that says `move up` followed by the `id`.
3. Create a similar function named `moveDown`.
We are going to wire up those two functions so that when the ⬆ and ⬇ buttons are clicked 
they get triggered. However we don't want to attach event listeners to every button (that's crazy!) 
so we are going to use a common ancestor (a parent node) to handle the event for us. 
This is pattern is called _event delegation_ and it is very useful for simplifying event handling.
4. Add an event listener to the unordered list node using the `addEventListener` method that 
will call an inline function when a `click` event is triggered.
The inline function will receive the event as a parameter.
5. Inside our inline function look at the `event.target.textContent` to determine whether 
to call `moveUp` or `moveDown`. We will also need to know which book to move so pass 
`event.target.parentElement.id` to the choosen method.
Refresh the webpage, click the `Fetch Books` button. We should see our bookshelf complete with buttons 
to move the books up and down the list.
6. Implement the `moveUp` and `moveDown` buttons with what you have learnt from the lesson. You will 
need to use the [`insertBefore`](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore) method.

*/
var button = document.createElement("button");
button.innerText = "Fetch Books";
document.body.appendChild(button);
button.setAttribute("id", "fetch-books-btn");
button.addEventListener("click", fetchBooks);
function fetchBooks() {
    const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
    fetch(booksJSON)
        .then(response => response.json())
        .then(processBooks)
        .then(removeBtn)

    function processBooks(books) {
        var unorderedList = document.createElement("ul");
        unorderedList.setAttribute("id", "list");
        document.body.appendChild(unorderedList);
        books.forEach(book => {
            console.log(book)

            var unorderedBook = document.createElement("li");
            var upButton = document.createElement("button");
            upButton.innerText = "⬆"; 
            var downButton = document.createElement("button");
            downButton.innerText = "⬇";
            unorderedBook.appendChild(upButton); 
            unorderedBook.appendChild(downButton);   
            unorderedBook.setAttribute("id", book.id);
            unorderedBook.appendChild(document.createTextNode("  -  "+book.title+" by "+book.author))
            document.getElementById("list").appendChild(unorderedBook);


        });
    }
    function removeBtn(){
 //     button.removeEventListener("click", fetchBooks);
        button.remove();
    }
}
/*

*/