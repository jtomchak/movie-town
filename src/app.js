import $ from "jquery";
import "./style.scss";

$(document).ready(function() {
  let moviesList = [];

  const getMovies = () => {
    const movieURL =
      "https://api.themoviedb.org/3/genre/27/movies?api_key=2434d246ec60c162a86db597467ef4ed&language=en-US&include_adult=false&sort_by=created_at.asc";
    fetch(movieURL)
      .then(res => res.json())
      .then(payload => {
        moviesList = payload.results;
        console.log(payload.results);
        createPosters(); //call create now that we have data.
      })
      .catch(err => {
        console.log(err);
      });
  };
  const createPosters = () => {
    moviesList
      .map(function(movie) {
        var divColumn = $("<div>").attr("class", "col-md-4");
        var divThumbnail = $("<div>")
          .attr("class", "thumbnail")
          .append(
            $("<img>")
              .attr(
                "src",
                "https://image.tmdb.org/t/p/w500/" + movie.poster_path
              )
              .attr("class", "poster_image")
          );
        divThumbnail.append(
          $("<div>")
            .attr("class", "caption")
            .append($("<h2>").append(movie.title))
        );
        divColumn.append(divThumbnail);
        return divColumn;
      })
      .map(appendElementWithVisibleSpacing);
    //put movieElements on the page already!!!
  };
  const appendElementWithVisibleSpacing = (movieElement, index) => {
    //create md clearfix for columns
    const divVisibleSpaceMD = $("<div>").attr(
      "class",
      "clearfix visible-md-block"
    );
    //put div in movies class div
    $(".movies").append(movieElement);
    //every 3rd add a clearfix MD
    if (index && (index + 1) % 3 === 0) {
      $(".movies").append(divVisibleSpaceMD);
    }
  };
  getMovies();

  //Take Poster URL's and create a img tag from each one,
  //gonna need to be it's own box, that box will have col-md-4
});
