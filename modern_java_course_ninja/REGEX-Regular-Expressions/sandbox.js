const exLet = /[a-z]/ // matches from a to z
const exLet2 = /[a-z]+/ // matches from 6 to 20 and any length
const exLet3 = /[a-z]{6,20}/ // matches from a to z
const exNum = /[0-9]/ // matches from 0 to 9
const exNum2 = /[0-9]+/ // matches from 0 to 9 and any length if you place + at the end
const exNum3 = /[0-9]{6,20}/ // matches from 6 to 20 and any length
const exNum4 = /hello?/ // (means optional) matches the 'o' letter 0 times or any length of the letter
const exNum5 = /car./ // matches the any character after word car e.g: cars, caro, cara, care, etc
const exNum6 = /car.+/ // This means that after word car matches any character and any length
const exNum7 = /a[a-z]*/ // This means a needs to be shown as is before the [] and the * means after a letter can be any character and any length
const exNum8 = /abc\*/ // This means that the * won't have the default behavior and will become a normal character that needs to be matched
const exNum9 = /p|t/ // matches p or t, either of those two will match
const exNum10 = /(p|t)yre/ // Means the word needs to start with p or t and then match "yre"

/**
 * structure for REGEX = /^[]{}$/
 * \d match any digit character (same as [0-9])
 * \w match any word character ([a-zA-Z0-9_] and _'s)
 * \s match a whitespace character (spaces, tabs, etc)
 * \t match a tab character only
 * d -- matches the literal character, 'd'
 * \d matches any digit character
 * 
 * g Perform a global match (find all matches rather than stopping after the first match)
 * i Perform case-insensitive matching
 * m Perform multiline matching
 * Link for more way of matches https://www.w3schools.com/jsref/jsref_obj_regexp.asp
 * + The one or more quantifier
 * \ The scape character or scape default behavior
 * [] The character set
 * [^] The negate symbol in a character set
 * Optional character ? = is the zero or one quantifier (makes a preceding char optional)
 * . Any character whatsoever (except for a newline character)
 * The * this means it can appear 0 times or 100 times
 * | the 'o' symbol this means that match this o this
 */

console.log('<------------- Regex Validation ----------> ');

// validation script
const reg = /^[a-z]{}$/gi; // conventional and best way to create REGEX

// how below works =>   Regex    String of flag
// const reg2 = new RegExp(/^[a-z]{}$/, 'i') // Another way of creating a REGEX
const theInputs = document.querySelectorAll('input');

const regPattern = {
    phone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

// input validation
function inputValidation(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid'
    }
}

theInputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        inputValidation(e.target, regPattern[e.target.attributes.name.value]);
    })
});
