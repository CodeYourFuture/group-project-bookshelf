var Button = document.createElement("Button"); //create a button

Button.setAttribute("id", "fetch-books-btn");//set id 
//Button.id= "fetch -books-btn" other method

var TextNode = document.createTextNode("Fetch Books"); //we create a  TextNode
Button.appendChild(TextNode);// append child to the button 

// var listener=document.addEventListener("fetchBooks");
Button.addEventListener("click", fetchBooks);// add the events listener 

//  document.getElementsByTagName("body");

document.body.appendChild(Button);

function fetchBooks() {         //create afunction
  // console.log(1,2,3);
  const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
  fetch(booksJSON)
    .then(response => response.json())
    .then(books => {
      var listOutput = "";

    })

}

