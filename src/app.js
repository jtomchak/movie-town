import $ from "jquery";
import "./style.scss";

$(document).ready(function() {
  const hello = () => console.log("linked and working....");
  hello();

  const getMovies = () => {
    const movieURL =
      "https://api.themoviedb.org/3/genre/27/movies?api_key=2434d246ec60c162a86db597467ef4ed&language=en-US&include_adult=false&sort_by=created_at.asc";
    fetch(movieURL)
      .then(res => res.json())
      .then(payload => {
        console.log(payload);
      })
      .catch(err => {
        console.error(err);
      });
  };
  getMovies();
});
