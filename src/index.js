import "./styles.css";

const btnFind = document.getElementById("find");
const inputTxt = document.getElementById("txtP");

btnFind.addEventListener("click", function() {
  getFilm(inputTxt.value);
});

function getFilm(title) {
  fetch("https://www.omdbapi.com/?apikey=e63808fb&t=" + title)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      response.json().then(function(data) {
        console.log(data);
        document.getElementById("app").innerHTML = ` 
        <h1>Filme ${data.Title}</h1>
        <p>${data.Plot}
         <br>
         <b>Linguagem</b> ${data.Language}
        </p>
        <img src="${
          data.Poster == "N/A"
            ? "https://media.comicbook.com/files/img/default-movie.png"
            : data.Poster
        }" alt="">
      `;
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
}
