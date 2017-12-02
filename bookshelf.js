

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
var upArrow = document.createElement('button');
upArrow.innerHTML = '&uarr;';

var downArrow = document.createElement('button');
downArrow.innerHTML = '&darr;';

function addArrows() {
    var listNodes = list.childNodes;
    var nodesArray = Array.prototype.slice.call(listNodes);
    
    nodesArray.forEach(function(el, index, arr) {
        var upArrow = document.createElement('button');
        upArrow.setAttribute('id', 'upArr');
        var upArrText = document.createTextNode('↑');
        upArrow.appendChild(upArrText);
        
       var downArrow = document.createElement('button'),
           downArrText = document.createTextNode('↓');
        
        downArrow.setAttribute('id', 'dwnArr');
        downArrow.appendChild(downArrText);
        el.insertBefore(upArrow, el.firstChild);
        el.insertBefore(downArrow, el.firstChild);
    });
   
}

// organizing the list




