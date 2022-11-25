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
        row.className = 'row';
        append(container, row);

        movies.forEach(movie => {
          if (movie.Title == searchString || searchString == "") {
            let p = createNode('p'),
            card = createNode('div'),
            col = createNode('div'),
            img = createNode('img');
            col.className = 'col col-3';
            card.className = 'card';
            img.src = movie['Poster'];
            p.innerHTML = movie['Title'];
            
            append(row, col);
            append(col, card);
            append(card, img);
            append(card, p);
          }
      });
    })
    .catch(function(error) {
      console.log(error);
    });
}