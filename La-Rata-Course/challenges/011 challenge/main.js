// (1)
// Escribir una funcion "elMayor" que
// reciba dos argumentos
// y diga si el primer argumento es mayor que el segundo

// ej: largest(3, 2) => true
// ej: largest(5, 7) => false
// ej: largest(7, 7) => false

// (2) Escribir una funcion 'scream' que reciba un string y devuelva
// el string en mayusculas y con este emoji al final '📣'

// ej: scream('illeins hp') => 'ILLEINS HP 📣'
// ej: scream('Iori YAGAMI') => 'IORI YAGAMI 📣'

// (3) Escribir una funcion 'countingSpaces' que reciba un string
// y devuelva el numero de espacios que tiene

// ej: countingSpaces('hello world') => 1
// ej: countingSpaces('yo ayer te dije que te amaba') => 6
// ej: countingSpaces('Goro') => 0

// (4)
// Escribir una funcion que  reciba una lista de numeros

console.log('<------ 1 Numero Mayor ----->');
const elMayorNum = (a, b) => {
  return a > b;
};
console.log(elMayorNum(2, 6));

console.log('<------ 2 Cream Function ----->');
const scream = (yell) => {
  return (yell.toUpperCase() + ' 📣');
}
console.log(scream('Illeins'));

console.log('<------ 3 Counting Space Function ----->');
const countingSpaces = (string) => {
  const count = string.split(" ").length - 1;
  return count;
}
console.log(countingSpaces('Mi Nombre es Diego'));

// (2)
// Escribir una funcion que 
// reciba una lista de numeros
// y devuelva el mayor
console.log('<------ Numero Mayor ----->');
const nums = [5000, 9, 100, 46, 22, 4, 7, 1, 11, 445, 99, 81, 5005, 10000, 2, 3, 98, 0, 12, 8, 4, 88, 11, 23, 456, 42 ];
// ej: highestNumber(numsInOrder) => 10;

const elNumMasGrande = listaNum => {
  let numGrande = 0;
  listaNum.forEach(num => {
    if (num > numGrande) {
      numGrande = num;
    }
  });
  return numGrande;
};
console.log(elNumMasGrande(nums));

// (5)
// Alguna diferencia si el array esta en orden?
const numsInOrder = [1, 3, 5, 7, 9, 550, 600];
// ej: highestNumber(numsInOrder) => 9

console.log('el ultimo numero es', numsInOrder[numsInOrder.length - 1]);

console.log('<------ CarShop Customers ----->');
// usando estos datos resolver (4) (5) y (6)...
const allCustomers = [
  {
    id: 1,
    first_name: "Giorgio",
    last_name: "Krahl",
    email: "gkrahl0@miitbeian.gov.cn",
    gender: "M",
    vehicle: {
      year: 2007,
      make: "Jaguar",
      model: "XK"
    }
  },
  {
    id: 2,
    first_name: 'Lyell',
    last_name: "Barrows",
    email: "lbarrows@meetup.com",
    gender: "M",
    vehicle: {
      year: 2005,
      make: "Volkswagen",
      model: "Golf"
    }
  },
  {
    id: 3,
    first_name: "Guinna",
    last_name: "Wormstone",
    email: "gwormstone2@vkontakte.ru",
    gender: "F",
    vehicle: {
      year: 1996,
      make: "Nissan",
      model: "200SX"
    }
  },
  {
    id: 4,
    first_name: "Lilly",
    last_name: "Antonnikov",
    email: "lantonnikov3@merriam-webster.com",
    gender: "F",
    vehicle: {
      year: 2010,
      make: "Nissan",
      model: "Titan"
    }
  },
  {
    id: 10,
    first_name: "Hannis",
    last_name: "Opdenorth",
    email: "hopdenorth9@blog.com",
    gender: "F",
    vehicle: {
      year: 2012,
      make: "Honda",
      model: "Civic"
    }
  },
  {
    id: 11,
    first_name: "Angelico",
    last_name: "Dobrovolski",
    email: "adobrovolskia@sitemeter.com",
    gender: "M",
    vehicle: {
      year: 1987,
      make: "Nissan",
      model: "Skyhawk"
    }
  }
]

// (6)
// Escriba una funcion que regrese un array con los objectos de los clientes que sean mujeres
/*
allFemales(customers) =>   [
  {
    id: 3,
    first_name: "Guinna",
    last_name: "Wormstone",
    email: "gwormstone2@vkontakte.ru",
    gender: "F",
    vehicle: {
      year: 1996,
      make: "Nissan",
      model: "200SX"
    }
  },
  {
    id: 4,
    first_name: Lilly,
    last_name: "Antonnikov",
    email: "lantonnikov3@merriam-webster.com",
    gender: "F",
    vehicle: {
      year: 2010,
      make: "Nissan",
      model: "Titan"
    }
  },
  ... etc...
]
*/

console.log('<------ Male Customers ----->');
// male customer forEach version
const allMaleCustomers = customers => {
  const maleList = [];
  customers.forEach(customer => {
    if (customer.gender == 'M')
      maleList.push(customer);
  });
  return maleList;
};

console.log(allMaleCustomers(allCustomers));

// male customers filtered version
console.log("male customers filtered version");
const allMaleCustomersFiltered = customers => {
  const maleFiltered = customers.filter(customer => {
    return customer.gender == 'M';
  })
  return maleFiltered;
}
console.log(allMaleCustomersFiltered(allCustomers));

// male customers filtered version simplified in one Line
console.log("male customers filtered version simplified in one Line");
const allMaleCustomersFiltered2 = customers => customers.filter(customer => customer.gender == 'M')
console.log(allMaleCustomersFiltered2(allCustomers));



console.log('<------ Female Customers ----->');
const femaleCustomers = customers => {
  const customerList = [];
  customers.forEach(customer => {
    if (customer.gender == 'F'){
      customerList.push(customer);
    }
  });
  return customerList;
}
console.log(femaleCustomers(allCustomers));

const femaleCustomersFilter = customers => {
  const filtered = customers.filter(customer => {
    return customer.gender == 'F';
  });
  return filtered;
};
console.log(femaleCustomersFilter(allCustomers));

// filter simplificado en una puta linea
const femaleCustomersFilter2 = customers => customers.filter(customer => customer.gender == 'F');
console.log(femaleCustomersFilter2(allCustomers));


// (7)
// una funcion que devuelva una lista con los personas que tengan carro con mas de 15 años (parecido al (4))

// (8) 
// Una funcion que devuelva una lista con solo los nombres de las personas que tienen carro Nissan

const customerVehicle = customers => {
  const customerList = [];
  customers.forEach(customer => {
    if (2022 - customer.vehicle.year > 15) {
      customerList.push(customer);
    }
  })
  return customerList;
}

console.log(customerVehicle(allCustomers));

// (6) 
// Una funcion que devuelva una lista con solo los nombres de las personas que tienen carro Nissan

console.log('<------ Customers with Nissa Vehicle ------>');
const nissanCustomers = customers => {
  const customerList = [];
  customers.forEach(customer => {
    if (customer.vehicle.make == 'Nissan') {
      customerList.push(customer);
    }
  });
  return customerList;
}
console.log(nissanCustomers(allCustomers));

console.log('Customers with Nissa Vehicle Filtered');
const nissanCustomersFiltered = customers => {
  const nissanCustomers = customers.filter(customer => {
    return customer.vehicle.make == 'Nissan';
  });
  return nissanCustomers;
}
console.log(nissanCustomersFiltered(allCustomers));

console.log('Customers with Nissa Vehicle Filtered Simplified');
const nissanCustomersFiltered2 = customers => customers.filter(customer => customer.vehicle.make == 'Nissan');
console.log(nissanCustomersFiltered2(allCustomers));

// (7)
// una funcion que devuelva la letra que mas aparece en este texto y cuantas veces aparece
const str = "abhanaau xkykaijaykkj amquyyzpyq nykmajyyqmaklyna rtyyyqmayzm smnymamnaybbqbhjkaty";
// ej: charCount(str) => "letter: 'y' count: 16"

console.log('Common Letter');
const commonLetter = (letter, countChar) => {
  let count = 0;
  for (let i = 0; i < letter.length; i++) {
    if (letter.charAt(i) == countChar) {
      console.log(`letter: ${letter[i]}`);
      console.log(`count: ${count}`);
      count += 1;
    }
  }
  return count;
}
console.log(commonLetter(str, 'y'));

console.log('Common Letter 2');

const commonLetter2 = listChar => {
  let grande = 0;
  listChar.forEach(nu => {
    if (nu > grande) {

      grande = nu;
    }
  });
  return grande;
}
console.log(commonLetter2(str));

// const elNumMasGrande = listaNum => {
//   let numGrande = 0;
//   listaNum.forEach(num => {
//     if (num > numGrande) {
//       numGrande = num;
//     }
//   });
//   return numGrande;
// };
