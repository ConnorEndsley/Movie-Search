import React, {useEffect, useState}from "react";
import MovieCard from "./MovieCard";    
import SearchIcon from "./search.svg";


const API_URL = "http://www.omdbapi.com?apikey=1ea1ae09";

const movie1 = {
  Title: "Batman Begins",
  Year: "2005",
  imdbID: "tt0372784",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
};


const MainMenu = () => {
    const [movies, setMovies] = useState([]);
const [searchText, setSearchText] = useState("");
const [id, setId] = useState([]);

const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
  console.log("data", data);
  setMovies(data.Search);
};

useEffect(() => {
  searchMovies("Batman");
}, []);


return(
    <div className="app">
        <h1>Movie Search</h1>

        <div className="search">
          <input
            placeholder="Search for a movie"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchText)}
          />
        </div>

        {movies.length > 0 ? (
          <div className="container">

                {movies.map((movie) => (
                    
                 <MovieCard movie={movie} />
                ))}

          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
    </div>

)

}

export default MainMenu;