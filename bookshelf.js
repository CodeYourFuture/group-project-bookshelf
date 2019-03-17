/*
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
            unorderedList.addEventListener("click", moveBooks);
        //    unordererBook.innerHTML = `<button>⬆</button> <button>⬇</button> ${book.title} by ${book.author}`
        })
    }    
    function moveBooks(event){
        if (event.target.textContent === '⬆') {
            moveUp(event.target.parentElement.id);//`id` of list element which is parent of `clicked-UP-button` 
        } else if (event.target.textContent === '⬇') {
            moveDown(event.target.parentElement.id);//`id` of list element which is parent of `clicked-DOWN-button`
        } else {
            alert('Click ⬆ or ⬇')//alert the user when clicking out the arrows
        }
    }

    function moveUp(id){
        const parentEl = document.querySelector('ul');
        const targetEl = document.getElementById(id);//accessing the clicked book with the `id`
        const bookEls = parentEl.children;//all books
        if (id !=="1"){
            console.log(id);
            console.log(parentEl)
            console.log(document.getElementById(id))
       //     console.log(bookEls)
            console.log(document.getElementById(id).previousSibling)
            parentEl.insertBefore(targetEl, targetEl.previousElementSibling)
     //       swap(id,id-1);
        }       
    }     

    function moveDown(id) {
        const parentEl = document.querySelector('ul');
        const targetEl = document.getElementById(id);//accessing the clicked book with the `id`
        const bookEls = parentEl.children;//all books
        if (id !== "5") {
            console.log(id);
            console.log(parentEl)
            console.log(document.getElementById(id))
            console.log(document.getElementById(id).nextSibling)
            parentEl.insertBefore(targetEl.nextElementSibling, targetEl)
        }
    }  

    function removeBtn(){
 //     button.removeEventListener("click", fetchBooks);
        button.remove();
    }
}
/*

*/