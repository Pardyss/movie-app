import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import MovieDescription from "../components/MovieDescription";
function Description() {
  let [movieDetails, setMovieDetails] = useState({});

  function getEachMovie() {
    let searchParams = new URLSearchParams(location.search);
    let imdbId = searchParams.get("imdb");

    fetch(`https://www.omdbapi.com/?apikey=1933a15a&i=${imdbId}&plot=full`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setMovieDetails(response);
      })
      .catch(() => {
        console.log("failed-request");
      });
  }

  getEachMovie();

  return (
    <div>
      <MovieDescription movieDetails={movieDetails} />
    </div>
  );
}

export default Description;
