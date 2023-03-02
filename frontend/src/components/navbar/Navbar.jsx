import React, { useState } from "react";
import "./Navbar.css";
import "./recherchebar/Recherchbar.css";
import PropTypes from "prop-types";

// retenter avec axios dans useEffect
// route au click sur film/serie
// call API au chargement de la page
function Navbar({ setChoice, setUrlApi }) {
  console.log(typeof setChoice);
  const changeChoiceTV = () => {
    setChoice("tv");
  };
  const changeChoiceMovie = () => {
    setChoice("movie");
  };
  const url = import.meta.env.VITE_API_URL;
  const keyUrl = import.meta.env.VITE_API_KEY;
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    setUrlApi(
      `${url}/search/multi?api_key=${keyUrl}&language=en-US&page=1&include_adult=false&query=${query}`
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div>
      <nav className="navigation">
        <ul>
          <li>
            <button
              className="choice-button"
              type="button"
              onClick={changeChoiceMovie}
            >
              Film
            </button>
          </li>
          <li>
            <button
              type="button"
              className="choice-button"
              onClick={changeChoiceTV}
            >
              Séries
            </button>
          </li>
        </ul>
        <div className="search-bar-container">
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            className="search-bar-input"
          />
          <button
            type="button"
            onClick={handleSearch}
            className="search-bar-button"
          >
            Chercher
          </button>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  setChoice: PropTypes.func.isRequired,
  setUrlApi: PropTypes.func.isRequired,
};

export default Navbar;
