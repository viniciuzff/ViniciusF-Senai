// tres constantes para referenciar as "ITEM" divs Projetos
const album = document.getElementById('albumFotos');
const casamentos = document.getElementById('casamentos');
const buffet = document.getElementById('buffet');

// tres constantes para referenciar as "iFrames" do Projetos
const movieAlbum = document.querySelector('.movieAlbum');
const movieCasamentos = document.querySelector('.movieCasamentos');
const movieBuffet = document.querySelector('.movieBuffet');


// evento de click
album.addEventListener('click', () =>{
    album.classList.toggle('active');
    movieAlbum.classList.toggle('active');
});
casamentos.addEventListener('click', () =>{ 
    casamentos.classList.toggle('active');
    movieCasamentos.classList.toggle('active');
});
buffet.addEventListener('click', () =>{
    buffet.classList.toggle('active');
    movieBuffet.classList.toggle('active');
});