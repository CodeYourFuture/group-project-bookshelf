

    var btn = document.createElement('button');
    btn.setAttribute('id', 'fetch-books-btn');
    var Text =  document.createTextNode('Fetch Books');
    btn.appendChild(Text);
    document.body.appendChild(btn)
    btn.addEventListener('click', fetchBooks);
   


    