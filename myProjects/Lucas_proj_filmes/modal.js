
const background = document.getElementById('modal-background')
const modalContainer = document.getElementById('modal-container');

let currentMovie = {};

function backgroundClickHandler(){
    
    overlay.classList.remove('open');
    
}

function closeModal () {

    overlay.classList.remove("open")

}

function addCurrentMovieToList (){
    
    if (isMovieAlreadyOnList(currentMovie.imdbID)){

        notie.alert({ type:'error', text: 'Filme já está na sua lista'})
        return;

    }
    addToList(currentMovie);
    updateUI(currentMovie);
    updateLocalStorage();
    closeModal();
    
}

background.addEventListener('click', backgroundClickHandler)

function createModal (data) {
    currentMovie = data;
    modalContainer.innerHTML = `
        <h2 id="movie-title">${data.Title} - ${data.Year}</h2>
        <section id="modal-body">
            <img id="movie-poster" src=${data.Poster} alt="Pôster do filme">
            <div id="movie-info">
                <h3 id="movie-plot">${data.Plot}</h3>
                <div id="movie-cast"><h5>Elenco: </h5>${data.Actors}</div>
                <div id="movie-genre">
                    <h5>Gênero: </h5> 
                    ${data.Genre}
                </div>
            </div>
        </section>
        <section id="modal-footer">
            <button id="add-to-list" onclick='{addCurrentMovieToList()}'><h3>Adicionar à lista</h3></button>
        </section>
    `

}