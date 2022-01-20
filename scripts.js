document.addEventListener("DOMContentLoaded", function () {
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  let h2 = document.createElement("h2");
  let h3 = document.createElement("h3");
  let h4 = document.createElement("h4");
  let h5 = document.createElement("h5");
  let h6 = document.createElement("h6");
  let ul = document.createElement("ul");
  // let li = document.createElement("li");
  
  div.className = "header-container";
  h1.className = "h1";
  h2.className = "h2";
  h3.className = "h3";
  h4.className = "h4";
  h5.className = "h5";
  h6.className = "h6";
  ul.className = "ul";
  // li.className = "li";

  let colorArray = ['#242582', '#41b3a3', '#c38d9e', '#E8a87c', '#85DCB0', '#e27d60', '#553d67', '#f64c72'];

  h2.addEventListener('dblclick', function() {
    document.getElementsByClassName('h2');
    this.style.color = (colorArray[Math.floor(Math.random() * colorArray.length)]);
  });

  let button = document.createElement('button');
  let btnText = document.createTextNode('Click to add new list item');
  button.className = "button";
  button.appendChild(btnText);

  let i = 1;

  let insertListItem = () => {
  
    let li = document.createElement("li");
    let liText = document.createTextNode("This is list item " + i);
    li.appendChild(liText);
    li.id = "li" + i;
    ul.appendChild(li);
    i++;
  }
  
button.addEventListener('click', insertListItem);

ul.addEventListener('click', function() {
  li = document.getElementsByTagName('li');
  this.style.color = (colorArray[Math.floor(Math.random() * colorArray.length)]);
});

  

  let h1text = document.createTextNode("this is an h1");
  let h2text = document.createTextNode("this is an h2");
  let h3text = document.createTextNode("this is an h3");
  let h4text = document.createTextNode("this is an h4");
  let h5text = document.createTextNode("this is an h5");
  let h6text = document.createTextNode("this is an h6");

  h1.appendChild(h1text);
  h2.appendChild(h2text);
  h3.appendChild(h3text);
  h4.appendChild(h4text);
  h5.appendChild(h5text);
  h6.appendChild(h6text);

  div.appendChild(h1);
  div.appendChild(h2);
  div.appendChild(h3);
  div.appendChild(h4);
  div.appendChild(h5);
  div.appendChild(h6);
  div.appendChild(button);
  div.appendChild(ul);

  document.body.appendChild(div);
});
