

let bttn = document.createElement( 'button' );
bttn.setAttribute( 'id', 'fetch-books-btn' );

let text = document.createTextNode( 'Fetch Books' );
bttn.appendChild( text );
bttn.addEventListener( 'click', fetchBooks );

document.body.appendChild( bttn );

function fetchBooks() {
    const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json';
    fetch( booksJSON )
        .then( response => response.json() )
        .then( processBooks )
        .then( removeBtn )
        .then( addArrows )
        .then( processingBooks )
}

// processBooks function
var list = document.createElement( 'ul' );

var processBooks = booksJSON => {
   
   booksJSON.forEach( function( el, index ) {
       var lists = document.createElement( 'li' );
       lists.setAttribute( 'id', booksJSON[index].id );
       lists.innerHTML = booksJSON[index].title + ' by ' + booksJSON[index].author;
       list.appendChild( lists );
        
   });

   document.body.appendChild( list );
}

/// Function to remove the button once the unordered list is created

var removeBtn = () => {
    var btnToRemove = document.getElementById( 'fetch-books-btn' );
    btnToRemove.removeEventListener( 'click', fetchBooks );
    btnToRemove.remove();
}

// Function to add up and down arrows
function addArrows() {
    var listNodes = list.childNodes;
    var nodesArray = Array.prototype.slice.call(listNodes);
    
    nodesArray.forEach(function(el) {
        var upArrow = document.createElement('button');
        var downArrow = document.createElement('button');
        var upArrText = document.createTextNode('↑');
        var downArrText = document.createTextNode('↓');
        upArrow.appendChild(upArrText);
        downArrow.appendChild(downArrText);
        el.insertBefore(upArrow, el.firstChild);
        el.insertBefore(downArrow, el.firstChild);
    });
   
}


// processing the books
const processingBooks = () => {

list.addEventListener('click', (event) => {
    var id = event.target.parentElement.id;
   if(event.target.textContent === '↓') {
       if( event.target.parentElement.id != '1' ) {
         moveDown(id)
       }
   }
   if(event.target.textContent === '↑') {
       if( event.target.parentElement.id != 5 ) {
         moveUp(id)
       }
      
   }
})

}

const moveUp = (id) => {
    const clickedLi = document.getElementById(id)
    var thisBook = clickedLi.childNodes[2].textContent 
    clickedLi.childNodes[2].textContent = clickedLi.nextSibling.childNodes[2].textContent
    clickedLi.nextSibling.childNodes[2].textContent = thisBook
}

const moveDown = (id) => {
    const clickedLi = document.getElementById(id)
    var thisBook = clickedLi.childNodes[2].textContent 
    clickedLi.childNodes[2].textContent = clickedLi.previousSibling.childNodes[2].textContent
    clickedLi.previousSibling.childNodes[2].textContent = thisBook

}


