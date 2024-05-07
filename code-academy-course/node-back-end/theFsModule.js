const fs = require('fs');

let secretWord = null;

let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};

fs.readFile('./finalFile.txt', 'utf-8', readDataCallback);
secretWord = 'cheeseburgerpizzabagels';

/* 
Let’s walk through the example above:

We required in the fs core module.
We define an error-first callback function which expects an error 
to be passed as the first argument and data as the second. 
If the error is present, the function will print
Something went wrong: ${err}, otherwise, it will print Provided file contained: ${data}.
We invoked the .readFile() method with three arguments:
The first argument is a string that contains a path to the file file.txt.
The second argument is a string specifying the file’s character encoding (usually ‘utf-8’ for text files).
The third argument is the callback function to be invoked when the asynchronous
task of reading from the file system is complete. 
Node will pass the contents of file.txt into the provided 
callback as its second argument.

*/