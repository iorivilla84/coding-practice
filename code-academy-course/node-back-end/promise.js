// Creating a new Promise and saving it to the testLuck variable. Two arguments are being passed, one for when the promise resolves, and one for if the promise gets rejected.
console.log('Promise');
const testLuck = new Promise((resolve, reject) => {
    if (Math.random() <= 0.5) { 
        resolve('Lucky winner!')
    } else {
        reject(new Error('Unlucky!'))
    }
    });

    testLuck.then(message => {
    console.log(message) // Log the resolved value of the Promise
    console.log(Math.random())
    }).catch(error => {
    console.error(error) // Log the rejected error of the Promise
});


console.log('--------Async/Await---------');
// Creating a new promise that runs the function in the setTimeout after 5 seconds. 
const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("All done!"), 3000);
  });
  
  // Creating an asynchronous function using an arrow expression and saving it to a the variable asyncFunction. 
  const asyncFunction = async () => {
    // Awaiting the promise to resolve and saving the result to the variable finalResult.
    const finalResult = await newPromise;
      
    // Logging the result of the promise to the console
    console.log(finalResult); // Output: All done!
  }
  
  asyncFunction();
  

console.log('--------setInterval()---------');

// Defining a function that instantiates setInterval
let alertMessage;
const showAlert = () => {
    // Calling setInterval() and passing a function that shows an alert every 5 seconds.
    alertMessage = setInterval(() => {
      console.log('I show every 5 seconds!')
    }, 5000);
  };
  
  // Calling the newInterval() function that calls the setInterval
  showAlert()

  const stopAlertMessage = () => {
      clearInterval(alertMessage);
      alertMessage = console.log('Have finished')
  }

  document.querySelector('.stop').addEventListener('click', stopAlertMessage);

