const searchNode = document.querySelector('.search');
const findNode = document.querySelector('.find');
const MovieListNode = document.querySelector('.wrapper-movie-list');

findNode.addEventListener('click', event => {
    if (!searchNode.value) {
        return;
    }
    const nameMovie = getNameFromInput();
    
});

function getNameFromInput() {
    const nameMovie = searchNode.value;
    return nameMovie;
};

function render() {
    
};

fetch('http://www.omdbapi.com/?t=Batman')
    .then(response => response.json())
    .then(json => console.log(json))