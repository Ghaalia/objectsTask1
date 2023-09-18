/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/

console.log("Question 1")

let person = {
    FirstName: "Ghaalia",
    Age: 24,
    City: "Oklahoma"
}

console.log(person)
console.log("\n")



/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/
console.log("Question 2")

person.email = "abc@gmail.com"
console.log(person)
console.log("\n")



/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/
console.log("Question 3")

function hasKey(object, key)
{
    if(object[key]) // if use object.key will search about a key names "key"
        return true;
    else 
        return false;

}

console.log(hasKey(person, "Age")) //print true

console.log(hasKey(person,"LastName")) //print false

console.log("\n")


/******************************
	Q4) Create a function that checks if all properties in an object have values
 (i.e., no properties are undefined or null).
- running the function on this object should return false
		const myObject = {
		  name: "John",
		  age: 30,
		  city: null,
		};
- running the function on this object should return true 
		const myObject = {
		  name: "John",
		  age: 30,
		  city: "Kuwait",
		};
********************************/
console.log("Question 4")

const obj1 = {
    name: "John",
    age: 30,
    city: null,
  };

  const obj2 = {
    name: "John",
    age: 30,
    city: "Kuwait",
  };



function checkValues(obj)
{
    for (let key in obj)
    { 
        if ( obj[key] == null || obj[key] == undefined )
            return false;
        
    };
    return true;
}

console.log(checkValues(obj1)) // print false
console.log(checkValues(obj2)) // print true


const movies = [
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      genre: "Drama",
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      genre: "Crime",
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: 1994,
      genre: "Crime",
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      genre: "Action",
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      genre: "Drama",
    },
  ];


  console.log("\n")

  /******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to log the titles of all the movies.
  ********************************/
  console.log("Question 5")
  
  function TitleOfMovies (movies) {

   movies.forEach(x => console.log(x.title) );
  }
  
  TitleOfMovies(movies)

  console.log("\n")

  /******************************
      Q6) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/
  console.log("Question 6")

  function moviesIn1994 (movies) {
    let count = 0;

    movies.forEach( x => {
       if (x.year == 1994)
            count ++;
    });

    return count;
  }

console.log(moviesIn1994(movies))
  
  
  console.log("\n")
  /******************************
      Q7) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/
   console.log("Question 7")
function update(movies) {

    movies.forEach(x => {
        if(x.title == "The Dark Knight")
           x.genre = "Action/Drama"
    });

    return movies
}

update(movies)
console.log(movies)


  