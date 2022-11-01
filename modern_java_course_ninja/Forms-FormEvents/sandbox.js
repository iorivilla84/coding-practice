console.log("<----------- Submit Event --------->");

const myForm = document.querySelector('.form1 .signup-form');
const feedback = document.querySelector('.form1 .feedback');
// const username = document.querySelector('#username')

myForm.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(username.value);
    // console.log(myForm.username.value); // quicker way to target an input inside a myForm
    const username = myForm.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;

    if (usernamePattern.test(username)) {
        //feedback good info
        feedback.innerHTML = 'Username is valid';
    } else {
        // feedback help info
        feedback.innerHTML = 'Username must contain Letters between 6 - 12 long'
    }
});

console.log("<----------- Regular Expressions --------->");

const miUsuario = 'diegopds';
const pattern = /^[a-z]{6,}$/

let res = pattern.test(miUsuario);
console.log(res);

if (res) {
    console.log('regex test passed');
} else {
    console.log('Regex test failed');
}

const miUser = 'diegopds';
const patron = /^[a-z]{6,}$/

let resultado = miUser.search(patron);
console.log(resultado);

console.log("<----------- Keyboard event --------->");

const keyUserName = document.querySelector('.form2 .keyboard-event');
const keyUserPattern = /^[a-zA-Z]{6,12}$/;

keyUserName.usuario.addEventListener('keyup', e => {
    // console.log(e.target.value, keyUserName.usuario.value);
    if (keyUserPattern.test(e.target.value)) {
        console.log('passed');
        keyUserName.usuario.setAttribute('class', 'success');
    } else {
        console.log('failed');
        keyUserName.usuario.setAttribute('class', 'error');
    }
})
