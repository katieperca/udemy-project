/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let movieName = prompt('Один из последних просмотренных фильмов?', ''),
        movieRating = prompt('На сколько оцените его?', '');
  
    if (movieName != null && movieRating != null && movieName != '' && movieRating != '' && movieName.length < 50) {
      personalMovieDB.movies[movieName] = movieRating;
      console.log('Done');
    } else {
      console.log('Error');
      alert('Ответ введен неправильно, повторите');
      i--;
    }
  }
}

rememberMyFilms();

function detectPerconalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
    alert('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка'); 
  }
}

detectPerconalLevel();

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
  }
}

writeYourGenres();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.peivate);
// console.log(personalMovieDB);


// Конец учебного кода, дальше примеры из лекций





