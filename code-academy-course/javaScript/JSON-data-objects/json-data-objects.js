const jsonData =
  '{ "parent": { "name": "Sally", "age": 45, "children" : [ { "name": "Kim", "age": 3 }, { "name": "Lee", "age": 1 } ] } }';
console.log(jsonData);

const jsObject = JSON.parse(jsonData);

console.log(jsObject["parent"]["children"]);



// Writing a JSON String
const jsonData2 = '{"parent":{"name":"Sally","age":45,"children":[{"name":"Kim","age":3},{"name":"Lee","age":1}]}}';

const jsObject2 = JSON.parse(jsonData2)
jsObject2.parent.age = 35

const jsObjectToJson = JSON.stringify(jsObject2)

console.log(jsObject2);

// EXERCISE DOWN BELOW
// JSON Jenerator: with well structured JSON.parce() and JSON.stringify()
// Element selectors
const jsonButton = document.querySelector('#generate');
const buttonContainer = document.querySelector('#buttonContainer');
const display = document.querySelector('#displayContainer');

// Text to populate button text on click
const collection = ["Another", "More", "Next", "Continue", "Keep going", "Click me", "A new one"];

// Asynchronous function
const generateJson = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
      changeButton();
    }
  } catch(error) {
    console.log(error);
  }
};
    
// Format returned promise data
const formatJson = (resJson) => {
  resJson = JSON.stringify(resJson);
  let counter = 0;
  return resJson.split('')
  .map(char => {
    switch (char) {
      case ',':
        return `,\n${' '.repeat(counter * 2)}`;
      case '{':
        counter += 1;
        return `{\n${' '.repeat(counter * 2)}`;
      case '}':
        counter -= 1;
        return `\n${' '.repeat(counter * 2)}}`;
      default:
        return char;
    }
  })
  .join('');
};

// Display formatted data
const renderResponse = (jsonResponse) => {
  const jsonSelection = Math.floor(Math.random() * 10);
  display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
};

// Change button text
const changeButton = () => {
  const newText = Math.floor(Math.random() * 7);
  jsonButton.innerHTML = `${collection[newText]}!`;
};

// Listen for click on button
jsonButton.addEventListener('click', generateJson);
