import {nanoid} from "nanoid";

const movieTitles = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`,
];

const movieSmallCovers = [
  `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  `img/bohemian-rhapsody.jpg`,
  `img/macbeth.jpg`,
  `img/aviator.jpg`,
  `img/we-need-to-talk-about-kevin.jpg`,
  `img/what-we-do-in-the-shadows.jpg`,
  `img/revenant.jpg`,
  `img/johnny-english.jpg`,
  `img/shutter-island.jpg`,
  `img/pulp-fiction.jpg`,
  `img/no-country-for-old-men.jpg`,
  `img/snatch.jpg`,
  `img/moonrise-kingdom.jpg`,
  `img/seven-years-in-tibet.jpg`,
  `img/midnight-special.jpg`,
  `img/war-of-the-worlds.jpg`,
  `img/dardjeeling-limited.jpg`,
  `img/orlando.jpg`,
  `img/mindhunter.jpg`,
  `img/midnight-special.jpg`
];

const movieGenres = [
  `Horror`,
  `Westerns`,
  `Comedy`,
  `Crime`,
  `Horror`,
  `Westerns`,
  `Comedy`,
  `Crime`,
  `Horror`,
  `Westerns`,
  `Sci-Fi`,
  `Romance`,
  `Musicals`,
  `Action`,
  `Sports`,
  `Crime`,
  `Comedy`,
  `Westerns`,
  `Crime`,
  `Melodramas`,
];

const movieYears = [
  `2001`,
  `2002`,
  `2003`,
  `2004`,
  `2005`,
  `2006`,
  `2007`,
  `2008`,
  `2009`,
  `2010`,
  `2011`,
  `2012`,
  `2013`,
  `2014`,
  `2015`,
  `2016`,
  `2017`,
  `2018`,
  `2019`,
  `2020`,
];

const generateMovieList = () => {
  let movieList = [];
  let movieItem = {};

  for (let i = 0; i < movieTitles.length; i++) {
    movieItem = {
      movieTitle: movieTitles[i],
      movieSmallCover: movieSmallCovers[i],
      movieGenre: movieGenres[i],
      movieYear: movieYears[i],
      key: nanoid()
    };
    movieList.push(movieItem);
  }
  return movieList;
};

export default generateMovieList;
