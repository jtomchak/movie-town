import $ from "jquery";
import "./style.scss";

$(document).ready(function() {
  let moviesList = [];
  // When page loads...:
  // $("div.content div").hide(); // Hide all content
  $("nav li:first")
    .addClass("current")
    .show(); // Activate first tab
  $("#movies").show(); // Show first tab content
  $("#surprise").show(); // Show first tab content

  $(".navMovies").click(function(event) {
    $("#movies").show();
    $("#surprise").hide();
  });
  $(".navSurprise").click(function(event) {
    $("#surprise").show();
    $("#movies").hide();
  });

  // On Click Event (within list-element!)
  $("nav li").click(function() {
    $("nav li").removeClass("active"); // Remove any active class
    $(this).addClass("active"); // Add "current" class to selected tab

    $("div.content div").hide(); // Hide all content
  }); // end click method;

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
        console.error(err);
      });
  };
  const createPosters = () => {
    const movieElements = moviesList
      .map(function(movie) {
        var divColumn = $("<div>").attr("class", "col-sm-6 col-md-4, col-lg-4");
        var divThumbnail = $("<div>")
          .attr("class", "thumbnail poster_thumbnail")
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
            .append(
              $("<h2>")
                .append(movie.title)
                .attr("class", "hidden-xs hidden-sm")
            )
            .append(
              $("<h4>")
                .append(movie.release_date)
                .attr("class", "hidden-xs hidden-sm")
            )
            .append(
              $("<p>", {
                class: "",
                text: movie.overview
              }).attr("class", "hidden-xs hidden-sm")
            )
            .append(
              $("<p>").append(
                $("<a>")
                  .attr("href", "http://www.imdb.com/title/")
                  .attr("class", "btn btn-primary")
                  .attr("role", "button")
                  .text("Details")
              )
            )
        );
        divColumn.append(divThumbnail); //put image in div
        return divColumn;
      })
      .map(appendElementWithVisibleSpacing);
  };

  //appending movie elements to the dom with clearfix spacing for md, sm, lg
  const appendElementWithVisibleSpacing = (movieElement, index) => {
    var divVisibleSpaceMDLG = $("<div>").attr(
      "class",
      "clearfix visible-md-block visible-lg-block"
    );
    var divVisibleSpaceSM = $("<div>").attr(
      "class",
      "clearfix visible-sm-block"
    );
    //put div in movies class div
    $(".movies").append(movieElement);
    //every 3rd add a clearfix for md
    if (index && (index + 1) % 3 === 0) {
      $(".movies").append(divVisibleSpaceMDLG);
    }
    //adding spacing for every 2nd for sm-6, 2 across for sm
    if (index && (index + 1) % 2 === 0) {
      $(".movies").append(divVisibleSpaceSM);
    }
  };

  //get movies onload
  getMovies();
});
