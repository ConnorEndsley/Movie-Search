import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import MainMenu from "./MainMenu";
import Description from "./Description";



const App = () => {


  return (
  
<BrowserRouter>

<Routes>
    <Route path="/" element={<MainMenu/>}/>

    <Route path="/Description" element={<Description/>}/>
  </Routes>

</BrowserRouter>
  

  );
};

export default App;
