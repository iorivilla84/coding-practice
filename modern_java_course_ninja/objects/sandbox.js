console.log('<-------- Creating first Object ---------->');
let user = {
    name: 'Diego',
    age: 38,
    email: 'iorivilla@hotmail.com',
    location: 'Sydney',
    movies: ['The Hobbit', 'Sherlock Holmes'],
    myPersonalMovies: [
        {title: 'The Hobbit', likes: 120},
        {title: 'Star Wars', likes: 330}
    ],
    //NORMAL FUNCTIONS BELOW
    /* login: function() {
        console.log('The user logged in');
    },
    logout: function() {
        console.log('The user logged out');
    },
    logMovies: function() { //NOTE: arrow functions doesn't work inside objects
        console.log('This user has watched the following movies');

        this.movies.forEach((movie, time) => {
            console.log(time, movie);
        })
    } */
    // SECOND AND BEST OPTION OF REGULAR FUNCTIONS BELOW
    login() {// Short HAND VERSION OF NORMAL FUNCTION
        console.log('The user logged in');
    },
    logout() {
        console.log('The user logged out');
    },
    logMovies() { //NOTE: arrow functions doesn't work inside objects
        console.log('This user has watched the following movies');

        this.movies.forEach((movie, number) => {
            console.log(number, movie);
        })
    },
    logPersonalMovies() {
        console.log('this is an object inside an array which is created inside the main object');

        this.myPersonalMovies.forEach((mytitle) => {
            console.log(`Title: ${mytitle.title}, with ${mytitle.likes} likes`);
        })
    }
};

user.name = 'Fernando';

console.log(user);
console.log(user.name);

console.log(user['name']);
user['location'] = 'Rosebery';
console.log(user['location']);

console.log(typeof user);

console.log('<-------- Adding Methods ---------->');
/**
 * we add the login function to the object
 * so we can log it to the console
 */
user.login();
user.logout();

console.log('<-------- This Keyword ---------->');
//NOTE: arrow functions doesn't work inside objects
// so we have to use a normal function
user.logMovies();

console.log('<-------- This Keyword with object inside an array ---------->');
user.logPersonalMovies();
