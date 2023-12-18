const numberOfFilms = +prompt('How many films do you watch?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i < 2; i++) {
    a = prompt('One of last yours wached movies?', ''),
        b = prompt('How you estimate this?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

}

if (personalMovieDB.count < 10) {
    console.log("Not enought");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are a good");
} else if (personalMovieDB.count >= 30) {
    console.log("You are cinemaman");
} else {
    console.log("error");
}
console.log(personalMovieDB);