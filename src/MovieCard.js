 import React from 'react'
 import { BrowserRouter, Route, Link, Routes  } from "react-router-dom";
import Description from './Description';

 const MovieCard = ({movie}) => {

return (
        <div className="movie">
        <div>
            <p>{movie.Year}</p>
        </div>

        <div>
            <Link to="/Description">
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
            </Link>
        </div>

        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
            
        </div>


        </div> 
    )
 }
 export default MovieCard;