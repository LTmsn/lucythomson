window.addEventListener('DOMContentLoaded', (event) => {
  display();
});

function buttonFunc() {
  searchString = document.getElementById('movieSearch').value;
  console.log(searchString);
  clearElements();
  display();
}

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const container = document.getElementById('list');
const url = 'https://www.omdbapi.com/?s=Harry+Potter&apikey=4d80d656';
let searchString = "";

function clearElements() {
  document.getElementById('row').remove();
}

function display() {
  fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      
        let movies = data['Search'];

        let row = createNode('div');
        row.setAttribute('class', 'row');
        row.setAttribute('id', 'row');
        append(container, row);

        movies.forEach(movie => {
          if (movie.Title == searchString || searchString == "") {
            let p = createNode('p'),
            card = createNode('div'),
            col = createNode('div'),
            img = createNode('img'),
            button = createNode('button');
            col.setAttribute('class', 'col col-3');
            card.setAttribute('class', 'card');
            img.setAttribute('src', movie.Poster);
            button.setAttribute('class', 'btn btn-primary position-bottom position-relative');
            button.setAttribute('href', 'info.html');
            button.innerHTML = "More Info";
            p.innerHTML = movie.Title;
            
            append(row, col);
            append(col, card);
            append(card, img);
            append(card, p);
            append(card, button);
          }
      });
    })
    .catch(function(error) {
      console.log(error);
    });
}