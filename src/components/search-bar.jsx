import { useState, useEffect, useRef } from "react";
import Cards from "./Cards";

import Pagination from "./Pagination";
import Slider from "./Slider";
import { TextField } from "@mui/material";
import Movies from "./Movies";

function SearchBar({ setErrorToApp }) {
  let [allSearchValue, setAllSearchValue] = useState("");
  let [movies, setMovies] = useState([]);
  let [totalPages, setTotalPages] = useState(0);
  let [page, setPage] = useState(1);
  let [SelectValue, setSelectValue] = useState("movie");
  const hasBeenRendered = useRef(false);

  function searchMovie(movieTitle) {
    return fetch(
      `https://www.omdbapi.com?apikey=1933a15a&s=${movieTitle}&type=${SelectValue}&page=${page}`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.Response === "True") {
          const url = new URL(location);
          url.searchParams.set("s", movieTitle);
          url.searchParams.set("type", SelectValue);

          history.pushState({}, "", url);
          setTotalPages(Math.ceil(response.totalResults / 10));
          setMovies(response.Search);
        }

        if (response.Response === "False") {
          setMovies([]);
          setErrorToApp(response.Error);
          console.log(response.Error, "response.Error");
        }
      })
      .catch((reject) => {
        console.log("error", "errrrrs");
      });
  }
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (allSearchValue) searchMovie(allSearchValue);
    }, 1000);
    return () => {
      console.log("unmounted");

      clearTimeout(debounce);
    };
  }, [SelectValue, allSearchValue, page]);

  function handleSelect(e) {
    setSelectValue(e.target.value);
  }

  return (
    <>
      <Slider />
      <div className="searchContainer">
        <i className="fa fa-search  icons"></i>
        <TextField
          onChange={(e) => {
            setAllSearchValue(e.target.value);
          }}
          type="text"
          sx={{
            background: "white",
            width: "50%",
            height: "40px",
          }}
          hiddenLabel
          size="small"
          placeholder="search a movie"
          variant="filled"
        />{" "}
        <select onChange={handleSelect} className="selects">
          <option value="movie">Movie</option>
          <option value="series">Series</option>
        </select>
      </div>

      {movies.length !== 0 && <Movies movies={movies} />}
      {movies.length !== 0 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
          padding={2}
          allSearchValue={allSearchValue}
        />
      )}
    </>
  );
}

export default SearchBar;
