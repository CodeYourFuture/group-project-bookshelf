/*

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
            unorderedBook.setAttribute("id", book.id);
            unorderedBook.appendChild(document.createTextNode(book.title+" by "+book.author))
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