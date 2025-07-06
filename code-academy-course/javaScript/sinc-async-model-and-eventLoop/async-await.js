// const fs = require('fs');
// const promisifiedReadfile = require('./promisifiedReadfile');
      
// // Here we use fs.readfile() and callback functions:
// fs.readFile('./file.txt', 'utf-8', (err, data) => {
//   if (err) throw err;
//   let firstSentence = data;
//   fs.readFile('./file2.txt',  'utf-8', (err, data) => {
//     if (err) throw err;
//     let secondSentence = data;
//     console.log(firstSentence, secondSentence);
//   });
// });

// // Here we use native promises with our "promisified" version of readfile:
// let firstSentence;
// promisifiedReadfile('./file.txt', 'utf-8')
//   .then((data) => {
//     firstSentence = data;
//     return promisifiedReadfile('./file2.txt', 'utf-8');
//   })
//   .then((data) => {
//     let secondSentence = data;
//     console.log(firstSentence, secondSentence)
//   })
//   .catch((err) => {console.log(err)});

// // Here we use promisifiedReadfile() again but instead of using the native promise .then() syntax, we declare and invoke an async/await function:
// async function readFiles() {
//   let firstSentence = await promisifiedReadfile('./file.txt', 'utf-8');
//   let secondSentence = await promisifiedReadfile('./file2.txt', 'utf-8');
//   console.log(firstSentence, secondSentence);
// }

// readFiles();


// The Wait Operator
const brainstormDinner = () => {
    return new Promise((resolve, reject) => {
    console.log(`I have to decide what's for dinner...`)
    setTimeout(() => {
      console.log('Should I make salad...?');
      setTimeout(() => {
        console.log('Should I make ramen...?');
        setTimeout(() => {
          console.log('Should I make eggs...?');
          setTimeout(() => {
            console.log('Should I make chicken...?');
            resolve('beans');
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  });
};

// Native promise version (old version):
function nativePromiseDinner() {
    brainstormDinner().then((meal) => {
        console.log(`I'm going to make ${meal} for dinner.`);
    });
  }
  // nativePromiseDinner()
  
  // async/await version desired version always:
  async function announceDinner() {
    // Write your code below:
    let dinner = await brainstormDinner();
    console.log(`I'm going to make ${dinner} for dinner.`);
  }
  announceDinner()


  // This is the shopTypeOfBeans function with async and await

  const shopTypeOfBeans = () => {
    return new Promise((resolve, reject) => {
    const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
    setTimeout(()=>{
      let randomIndex = Math.floor(Math.random() * 5);
      let beanType = beanTypes[randomIndex];
      console.log(`I bought ${beanType} beans because they were on sale.`);
     resolve(beanType);
    }, 1000)
  })
  }
  
  let soakTheBeans = (beanType) => {
     return new Promise((resolve, reject) => {
       console.log('Time to soak the beans.');
      setTimeout(()=>{
        console.log(`... The ${beanType} beans are softened.`);
        resolve(true);
        }, 1000);
    });
  }
  
  let cookTheBeans = (isSoftened) => {
    return new Promise((resolve, reject) => {
      console.log('Time to cook the beans.');
      setTimeout(()=>{
        if (isSoftened) {
          console.log('... The beans are cooked!');
          resolve('\n\nDinner is served!');
        }
      }, 1000);
    });
  }

  async function makeBeans() {
    let type = await shopTypeOfBeans();
    let isSoft = await soakTheBeans(type);
    let dinner = await cookTheBeans(isSoft);
    console.log(dinner)
  }
  
  makeBeans();

  // Handling Errors with Try/Catch
  let randomSuccess = () => {
    let num = Math.random();
    if (num < .5 ){
      return true;
    } else {
      return false;
    }
   };
   
   // This function returns a promise that resolves half of the time and rejects half of the time
   let cookBeanSouffle = () => {
    return new Promise((resolve, reject) => {
      console.log('Fingers crossed... Putting the Bean Souffle in the oven');
      setTimeout(() => {
        let success = randomSuccess();
        if(success){
          resolve('Bean Souffle');
        } else {
          reject('Dinner is ruined!');
        }
      }, 1000);
    });
   };

   async function hostDinnerParty() {
    try {
      let resolvedValue = await cookBeanSouffle()
      console.log(`${resolvedValue} is served!`)
    } catch(error) {
      console.log(error);
      console.log('Ordering a pizza!');
    }
  }
  
  hostDinnerParty();

// Handling Independent Promises
/* Note: if we have multiple truly independent promises that we would like to execute fully in parallel,
we must use individual .then() functions and avoid halting our execution with await.*/
let cookBeans = () => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('beans');
   }, 1000);
 });
}

let steamBroccoli = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('broccoli');
   }, 1000);
 });
}

let cookRice = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('rice');
   }, 1000);
 });
}

let bakeChicken = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('chicken');
   }, 1000);
 });
}

async function serveDinner() {
  let vegetablePromise = steamBroccoli();
  let starchPromise = cookRice();
  let proteinPromise = bakeChicken();
  let sidePromise = cookBeans();

  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
}

serveDinner();


// Await Promise.all() which is always the desired way when handling multiple promises at once
async function serveDinnerAgain() {
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);

  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`)

// example to loop trough the array
  // for(let i = 0; i < foodArray.length; i++) {
  //   console.log(foodArray[i])
  // }

  // for (let food of foodArray) {
  //   console.log(food)
  // }
}
serveDinnerAgain();