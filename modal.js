const background = document.getElementById("modal-background");
const modalContainer = document.getElementById("modal-container");

function backgroundClickHandler() {
  overlay.classList.remove("open");
}

function createModal(data) {
  modalContainer.innerHTML = `
  <h5 id="movie-title">${data.Title} - ${data.Year}</h5>
          <section id="modal-body">
            <img
              id="movie-poster"
              src=${data.Poster}
              alt="Imagem do filme"
            />
            <div id="movie-info">
              <p id="movie-plot">${data.Plot}</p>
              <div id="movie-cast">
                <h5>Elenco:</h5>
                <p>${data.Actors}</p>
              </div>
              <div id="movie-genre">
                <h5>Gênero:</h5>
                <p>${data.Genre}</p>
              </div>
            </div>
          </section>
          <section id="modal-footer">
            <button id="add-to-list" onclick='{addToList(${JSON.stringify(
              data
            ).replace("'", "`")})}'>Adicionar à lista</button>
          </section>`;
}

background.addEventListener("click", backgroundClickHandler);
