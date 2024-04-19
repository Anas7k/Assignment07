//STEP 1
// let favoriteMovies = ["The Avengers",
//                       "The Dark Knight",
//                       "Hero",
//                       "Iron Man",
//                       "The Matrix"];
// console.log("Second favorite movie is: " + favoriteMovies[1]);

//STEP 2
// let movies = new Array(5);
// movies[0] = "The Avengers";
// movies[1] = "The Dark Knight";
// movies[2] = "Hero";
// movies[3] = "Iron Man";
// movies[4] = "The Matrix";
// console.log("First favorite movie is: " + movies[0]);

//STEP 3
// let movies = new Array(5);
// movies[0] = "The Avengers";
// movies[1] = "The Dark Knight";
// movies[2] = "Hero";
// movies[3] = "Iron Man";
// movies[4] = "The Matrix";
// console.log("First favorite movie is: " + movies[0]);
// movies[5] = "Avatar";
// console.log(movies.length);

//STEP 4

// let movies = ["The Avengers",
//               "The Dark Knight",
//               "Hero",
//               "Iron Man",
//               "The Matrix"];
// delete movies[0];
// console.log("movies[0] = " + String(movies[0]));
// console.log("movies[1] = " + String(movies[1]));
// console.log("movies[2] = " + String(movies[2]));
// console.log("movies[3] = " + String(movies[3]));
// console.log("movies[4] = " + String(movies[4]));
// console.log(movies)

//STEP 5
// let movies = ["The Avengers",
//               "The Dark Knight",
//               "Hero",
//               "Iron Man",
//               "The Matrix",
//               "Titanic",
//               "Avatar"];
// for (let index in movies) {
//   console.log(movies[index]);
// }


//STEP 6
// let movies = ["The Avengers",
//               "The Dark Knight",
//               "Hero",
//               "Iron Man",
//               "The Matrix",
//               "Titanic",
//               "Avatar"];
// for (let movie of movies) {
//   console.log(movie);
// }

//STEP 7
// let movies = ["The Avengers",
//               "The Dark Knight",
//               "Hero",
//               "Iron Man",
//               "The Matrix",
//               "Titanic",
//               "Avatar"];
// for (let movie of movies.sort()) {
//     console.log(movie);
//   }
  
//STEP 8
// let movies = ["The Avengers",
//               "The Dark Knight",
//               "Hero",
//               "Iron Man",
//               "The Matrix",
//               "Titanic",
//               "Avatar"];

// let leastFavMovies = [];
// leastFavMovies[0] = "Transformers";
// leastFavMovies[1] = "Spider Man";
// leastFavMovies[2] = "Super Man";
// let i;

// console.log("Movies I like:");
// console.log("");
// for (i = 0; i < movies.length; i += 1) {
//     console.log(String(movies[i]));
// }
// console.log("");

// console.log("Movies I regret watching:");
// console.log("");
// for (i = 0; i < leastFavMovies.length; i += 1) {
//     console.log(String(leastFavMovies[i]));
// }

//STEP 9
// let movies = ["The Avengers",
//               "The Dark Knight",
//               "Hero",
//               "Iron Man",
//               "The Matrix",
//               "Titanic",
//               "Avatar"];

// let leastFavMovies = [];
// leastFavMovies[0] = "Transformers";
// leastFavMovies[1] = "Spider Man";
// leastFavMovies[2] = "Super Man";

// movies = movies.concat(leastFavMovies).sort().reverse();
// let i;
// for (i = 0; i < movies.length; i += 1) {
//     console.log("movies[" + String(i) + "] = " + String(movies[i]));
// }

//STEP 10
// let movies = ["The Avengers",
//               "The Dark Knight",
//               "Hero",
//               "Iron Man",
//               "The Matrix",
//               "Titanic",
//               "Avatar"];

// let leastFavMovies = [];
// leastFavMovies[0] = "Transformers";
// leastFavMovies[1] = "Spider Man";
// leastFavMovies[2] = "Super Man";

// movies = movies.concat(leastFavMovies).sort().reverse();
// console.log(movies.pop());

//STEP 11
// let movies = ["The Avengers",
//               "The Dark Knight",
//               "Hero",
//               "Iron Man",
//               "The Matrix",
//               "Titanic",
//               "Avatar"];

// let leastFavMovies = [];
// leastFavMovies[0] = "Transformers";
// leastFavMovies[1] = "Spider Man";
// leastFavMovies[2] = "Super Man";

// movies = movies.concat(leastFavMovies).sort().reverse();
// console.log(movies.shift());

//STEP 12
// let movies = ["The Avengers",
//               "The Dark Knight",
//               "Hero",
//               "Iron Man",
//               "The Matrix",
//               "Titanic",
//               "Avatar"];

// let leastFavMovies = [];
// leastFavMovies[0] = "Transformers";
// leastFavMovies[1] = "Spider Man";
// leastFavMovies[2] = "Super Man";

// movies = movies.concat(leastFavMovies).sort().reverse();

// let nextFavMovies = [];
// nextFavMovies[0] = "Rush Hour";
// nextFavMovies[1] = "Kong Fu Panda";
// nextFavMovies[2] = "The Rock";

// let i;
// for (i = 0; i < leastFavMovies.length; i += 1) {
//     let leastFavMovieIndex = movies.indexOf(leastFavMovies[i]);
//     movies[leastFavMovieIndex] = nextFavMovies[i];
// }

// for (i = 0; i < movies.length; i += 1) {
//     console.log("movies[" + String(i) + "] = " + String(movies[i]));
// }

//STEP 13
// let movies = [
//                ["The Avengers", 1],
//                ["The Dark Knight", 2],
//                ["Hero", 3],
//                ["Iron Man", 4],
//                ["The Matrix", 5]
//             ];

             
              
// function stringFilter(elem) {
//     "use strict";
//     return typeof elem === "string";
// }

// let i;
// for (i = 0; i < movies.length; i += 1) {
//     let movie = movies[i].filter(stringFilter);
//     console.log(movie);
// }

//STEP 14
// let employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
// let showEmployee = function (param) {
//     "use strict";
//     console.log("Employees:");
//     console.log("");
//     let i;
//     for (i = 0; i < param.length; i += 1) {
//         console.log(String(param[i]).toUpperCase());
//     }
// };
// showEmployee(employees);

//STEP 15
// function filterValues(arr) {
//     return arr.filter(item => item !== false && item !== null && item !== 0 && item !== "");
//   }
  
//   console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
  
//STEP 16
// function getRandomNum(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(getRandomNum(numbers));

//STEP 17
// function getLargestNumber(arr) {
//     return Math.max(...arr);
//   }

// let numericArray = [];
// let i;
// for (i = 0; i < 10; i += 1) {
//     numericArray[i] = Math.round(Math.random() * 100);
//     console.log("numericArray[" + String(i) + "] = " + numericArray[i]);
// }
// console.log("Largest = " + String(getLargestNumber(numericArray)));
