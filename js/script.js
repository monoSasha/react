let numberOfFilms = prompt('How many films do you watch? ')
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



let a = prompt('last films?', '');
let b = prompt('ocenka', '');
let c = prompt('last films?', '');
let d = promp5t('ocenka', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);