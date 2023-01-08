import React, { useState } from "react";
import { ResultCard2 } from "./ResultCard2";

export const AddA = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=7eb09707bd0e63ad344deb00859f4fb3&language=en-US&page=1&include_adult=false&query=${e.target.value}`
      )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Find TV Show"
              value={query}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard2 movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
