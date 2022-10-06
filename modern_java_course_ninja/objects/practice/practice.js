console.log('<-------- My Practice Personal object ---------->');
const dData = {
    name: 'Diego',
    age: 38,
    location: 'Australia',
    favMovies: [
        {title: 'Sherlock Holmes', likes: 100},
        {title: 'The Hobbit', likes: 150},
        {title: 'Games of Thrones', likes: 120}
    ],
    login() {
        console.log('User is logged in');
    },
    logout() {
        console.log('User has logged out');
    },
    myFavMovies() {
        this.favMovies.forEach(movieTitle => {
            console.log(`My favorite movie is: ${movieTitle.title}, with: ${movieTitle.likes} likes :)`);
        });
    }
};

console.log(`Hello! my name is: ${dData.name}`);
console.log(`My age is: ${dData.age}`);
console.log(`I live in: ${dData.location}`);
console.log(`My Favorite movies down below =>`);
dData.myFavMovies();
dData.login();
dData.logout();

console.log('<-------- For Each Loop inserted in the DOM ---------->');
const miGente = ['Jessica', 'Diego', 'Benji', 'Alba', 'Victor', 'Manolo'];
const ulMyGente = document.querySelector('.myGente');

html = ``;
miGente.forEach( persona => {
    html += `
        <li style="color: white; background: #4d4d4d; margin-bottom: 10px; padding: 30px 20px; list-style: none;">${persona}</li>
    `;
});

ulMyGente.innerHTML = html;


console.log('<-------- Objects Literals ---------->');
const personalData = {
    name: 'Jessica',
    age: 28,
    location: 'Sydney',
    misPeliculas: [
        {nombre: 'Residend Evil', likes: 50},
        {nombre: 'White Collar', likes: 100}
    ],
    login() {
        console.log('user is logged in');
    },
    logout() {
        console.log('user is logged out');
    },
    peliculas() {
        this.misPeliculas.forEach(titulo => {
            console.log(`Mis peliculas favoritas son ${titulo.nombre}, con ${titulo.likes} likes`);
        })
    }
}

personalData.peliculas();
personalData.login();
personalData.logout();
console.log(personalData.name);
console.log(personalData.age);
console.log(personalData.location);
