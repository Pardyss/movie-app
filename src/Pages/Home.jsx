import { useState, useEffect } from "react";
import SearchBar from "../components/search-bar";
import ErrorBoundary from "../components/ErrorBoundaries";
import Header from "../components/Header";
import Menu from "../components/Menu";

function Home() {
  let [error, setErrorToApp] = useState("");

  return (
    <div className="App">
      <Header />

      <SearchBar setErrorToApp={setErrorToApp} />
      {error && <ErrorBoundary error={error} />}
    </div>
  );
}

export default Home;
