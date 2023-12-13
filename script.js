const numberOfFilms = +prompt('How many films do you watch?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of last yours wached movies?', ''),
    b = prompt('How you estimate this?', ''),
    c = prompt('One of last yours wached movies?', ''),
    d = prompt('How you estimate this?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);