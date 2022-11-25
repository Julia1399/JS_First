let numberOfFilms = prompt('Сколько фильмов Вы посмотрели?');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {}, 
    genres: [], 
    privat: false
}
for (i = 0; i<2; i++){
    let film = prompt('Один из последних просмотренных фильмов?');
    let rate = prompt('На сколько оцените его?');
    personalMovieDB.movies[film] = rate;
    console.log(personalMovieDB)
}
