import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import generateMovieList from "./mock/film";

ReactDOM.render(<App movies={generateMovieList()} />, document.querySelector(`#root`));
