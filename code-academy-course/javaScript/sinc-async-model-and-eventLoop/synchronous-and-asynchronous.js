const shopForBeans = () => {
    return new Promise((resolve, reject) => {
      const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
      setTimeout(() => {
        let randomIndex = Math.floor(Math.random() * beanTypes.length);
        let beanType = beanTypes[randomIndex];
        console.log(`2. I bought ${beanType} beans because they were on sale.`);
        resolve(beanType);
      }, 1000);
    });
  }
   
  async function getBeans() {
    console.log(`1. Heading to the store to buy beans...`);
    let value = await shopForBeans();
    console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
  }
   
  getBeans();
  console.log("Describe what happens with this `console.log()` statement as well.");

//   Constructing a Promise Object
const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};

const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
        resolve('Sunglasses order processed.')
    } else {
        reject('That item is sold out.')
    }
}

const orderSunglasses = () => {
    return new Promise(myExecutor);
}
  
const orderPromise = orderSunglasses();

console.log(orderPromise)

// The Node setTimeout() Function
console.log("This is the first line of code in app.js.");

const usingSTO = () => {
  console.log('Any string')
}

setTimeout(usingSTO, 1000)

console.log("This is the last line of code in app.js.");
  

//  Success and Failure Callback Functions  
const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let inStock = order.every(item => inventory[item[0]] >= item[1]);
        if (inStock) {
          resolve(`Thank you. Your order was successful.`);
        } else {
          reject(`We're sorry. Your order could not be completed because some items are sold out.`);
        }
      }, 2000);
    })
};

const order = [['sunglasses', 1], ['bags', 2]];

// Example of a successful promise using then only
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue)
}

const handleFailure = (rejectedValue) => {
  console.log(rejectedValue)
}

checkInventory(order).then(handleSuccess, handleFailure)

// Example of a successful promise using then and catch
const inventory2 = {
    sunglasses: 0,
    pants: 1088,
    bags: 1344
};

const checkInventory2 = (order) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let inStock = order.every(item => inventory2[item[0]] >= item[1]);
        if (inStock) {
          resolve(`Thank you. Your order was successful.`);
        } else {
          reject(`We're sorry. Your order could not be completed because some items are sold out.`);
        }
      }, 2000);
    })
};

const handleSuccess2 = (resolvedValue) => {
    console.log(resolvedValue)
}
  
const handleFailure2 = (rejectedValue) => {
    console.log(rejectedValue)
}

checkInventory2(order)
    .then(handleSuccess2)
    .catch(handleFailure2)
