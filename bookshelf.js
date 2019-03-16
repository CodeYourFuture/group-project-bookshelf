window.bookshelf = (function () { //the whole code as a module

    //The button to fetch our books and initialise our program
    function createBtn() {

        //Select the block i use to display the code 
        var main = document.querySelector("#main");

        //Creates and append the button to the div
        var newButton = document.createElement("button");
        main.appendChild(newButton);

        //Adds an id to the button
        newButton.setAttribute("id", "fetch-books-btn");

        //The value that can be read on the button
        var newText = document.createTextNode("Fetch Books");

        //Appends the value to the button
        newButton.appendChild(newText);

        //Adds an event listener to the button
        newButton.addEventListener("click", fetchBooks);

    }

    // createBtn();

    //Function used in our promise when fetching the Url 
    function processBooks(books) {

        //Creates the unordered list and appends it to the div
        var newList = document.createElement("ul");
        main.appendChild(newList);

        //Adds a class just to style in css
        newList.className = "deco"; // another method:  newList.setAttribute("class", "deco");

        //This function takes an array from the promise so we can use a high level function forEach on it
        books.forEach((element) => {
            //Prints each li on the div 
            newList.innerHTML += `<li id=${element.id}><button>⬆</button><button>⬇</button>${element.title}</li>`

        });

        //Responsible of the moving up and down
        var unordList = document.querySelector("ul");
        unordList.addEventListener("click", (e) => {
            if (event.target.textContent === "⬆") {
                moveUp(event.target.parentElement.id);

            } else {

                moveDown(event.target.parentElement.id);
            }
        })
    }

    //Moves the li up
    function moveUp(id) {
        var book1 = document.getElementById(`${id}`);
        var book2 = document.getElementById(`${id-1}`);
        parentLi = book1.parentNode;
        parentLi.insertBefore(book1, book2);

    }

    //Moves the li down
    function moveDown(id) {
        var book2 = document.getElementById(`${id}`);
        var book1 = book2.nextElementSibling;
        parentLi = book2.parentNode;
        parentLi.insertBefore(book1, book2);
        console.log(book1);
    }

    //Remove the button soon as the list of books is printed
    function removeBtn() {
        var remBtn = document.getElementById("fetch-books-btn");
        remBtn.removeEventListener("click", fetchBooks);
        remBtn.remove();
    }


    ////////////Main function ----returning a promise
    function fetchBooks() {
        // console.log("hello");
        const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
        fetch(booksJSON)
            .then(response => response.json())
            .then(processBooks)
            .then(removeBtn)
    }

    ////Initialises the module but needs a script tag in the html """"name.init()""""
    return {
        init: createBtn,
        removeBtn,
        fetchBooks,
        moveUp,
        moveDown,
        processBooks
    }


}())