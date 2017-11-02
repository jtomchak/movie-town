import "jquery";
import "bootstrap-loader";
import "./style.scss";

$(document).ready(function() {
  //This will hide the body of our site until all our stuff including
  //CSS has been loaded. Sweet. No unstyled Flashing.
  $("body").removeClass("hidden");
  let moviesList = [];

  const getMovies = () => {
    const movieURL =
      "https://api.themoviedb.org/3/genre/27/movies?api_key=2434d246ec60c162a86db597467ef4ed&language=en-US&include_adult=false&sort_by=created_at.asc&page=2";
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

  const getMovieDetails = movieId => {
    const movieDetailsURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=2434d246ec60c162a86db597467ef4ed`;
    fetch(movieDetailsURL)
      .then(res => res.json())
      .then(payload => {
        console.log(payload);
        presentMovieDetailsModal(payload);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const presentMovieDetailsModal = movie => {
    $(".modal-title:first").text(movie.title);
    $(".movieDetails-overview:first").text(movie.overview);
    $(".movieDetails-img:first").attr(
      "src",
      "https://image.tmdb.org/t/p/w500/" + movie.poster_path
    );
    $(".movieDetails-tagline:first").text(movie.tagline);
    $("#movieDetails-modal").modal();
  };
  const createPosters = () => {
    moviesList
      .map(function(movie) {
        var divColumn = $("<div>").attr(
          "class",
          "col-xs-12 col-sm-6 col-md-4 col-lg-4"
        );
        var divThumbnail = $("<div>")
          .attr("class", "thumbnail")
          .append(
            $("<img>")
              .attr(
                "src",
                "https://image.tmdb.org/t/p/w500/" + movie.poster_path
              )
              .attr("class", "poster_image")
          )
          .append(
            $("<div>")
              .attr("class", "caption")
              .append($("<h2>").append(movie.title))
              .append(
                $("<button>")
                  .attr("id", "movie-details")
                  .attr("class", "btn btn-info btn-md")
                  .attr("type", "button")
                  .text("Details")
                  .click(function() {
                    console.log(movie.id);
                    getMovieDetails(movie.id);
                  })
              )
          );
        divColumn.append(divThumbnail);
        return divColumn;
      })
      //put movieElements on the page already!!!
      .map(appendElementWithVisibleSpacing);
  };
  const appendElementWithVisibleSpacing = (movieElement, index) => {
    //create md & lg clearfix for columns
    const divVisibleSpaceMDLG = $("<div>").attr(
      "class",
      "clearfix visible-md-block visible-lg-block"
    );
    //create sm xs clearfix for columns
    const divVisibleSpaceSM = $("<div>").attr(
      "class",
      "clearfix visible-sm-block"
    );
    //put div in movies class div
    $(".movies").append(movieElement);
    //every 3rd add a clearfix MD
    if (index && (index + 1) % 3 === 0) {
      $(".movies").append(divVisibleSpaceMDLG);
    }
    if (index && (index + 1) % 2 === 0) {
      $(".movies").append(divVisibleSpaceSM);
    }
  };
  getMovies();

  //Take Poster URL's and create a img tag from each one,
  //gonna need to be it's own box, that box will have col-md-4
});
