let div = document.createElement('div');

div.className = 'header-container';

let h1 = document.createElement('h1');

let text = document.createTextNode('this is an h1');

h1.appendChild(text);
div.appendChild(h1);
body.appendChild(div);


