let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films do you watch?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films do you watch?', '');
    }

}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Not enought");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("You are a good");
    } else if (personalMovieDB.count >= 30) {
        console.log("You are cinemaman");
    } else {
        console.log("error");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your lovely genre is ${i}`);
    }
}

writeYourGenres();
