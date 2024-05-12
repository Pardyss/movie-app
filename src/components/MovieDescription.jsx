function MovieDescription({ movieDetails }) {
  return (
    <>
      <div id="descriptions">
        <div className="innerContainer">
          <img className="imgs" src={movieDetails.Poster}></img>
        </div>
        <div className="innerContainer2">
          <h1 className="paras">{movieDetails.Title}</h1>
          <p className="paras">
            {" "}
            <span>Year: </span>
            {movieDetails.Year}
          </p>
          <p className="paras">
            <span>Date of Release: </span> {movieDetails.Released}
          </p>

          <p className="paras">
            <span>Actors: </span> {movieDetails.Actors}
          </p>
          <p className="paras">
            <span>Country: </span> {movieDetails.Language}
          </p>
          <p className="paras">
            <span>Genre: </span> {movieDetails.Genre}
          </p>
        </div>
      </div>
      <div>
        <p className="paras">
          <span>Plot: </span>
          {movieDetails.Plot}
        </p>
      </div>
    </>
  );
}
export default MovieDescription;
