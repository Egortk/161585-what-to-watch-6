import React from "react";
import PropTypes from 'prop-types';
import MainScreen from "../main-screen/main-screen";

const App = (props) => {
  const {movies} = props;
  return <MainScreen movies={movies} />;
};

App.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default App;
