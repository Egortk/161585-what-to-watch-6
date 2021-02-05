import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import AddReview from "../add-review/add-review";
import MoviePage from "../movie-page/movie-page";
import MyList from "../my-list/my-list";
import NotFoundPage from "../not-found-page/not-found-page";
import Player from "../player/player";
import SignIn from "../sign-in/sign-in";
import MainScreen from "../main-screen/main-screen";

const App = (props) => {
  const {movies} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen movies={movies} />;
        </Route>
        <Route exact path="/movies/:id">
          <MoviePage />;
        </Route>
        <Route exact path="/movies/:id/review">
          <AddReview />;
        </Route>
        <Route exact path="/mylist">
          <MyList />;
        </Route>
        <Route exact path="/player/:id">
          <Player />;
        </Route>
        <Route exact path="/login">
          <SignIn />;
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
