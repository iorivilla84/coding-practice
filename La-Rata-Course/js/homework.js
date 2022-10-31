/*
  Ejercicio 1 - Mind reader:

  Usando la funcion prompt() de JS, pidale al usuario que piense en un número entre 1 y 50 = de alli para alla no no no no
  - si el número NO está en el rango... preguntele de nuevo
  - si el numero SI está en el rango... usando console.log() cuente de 1 hasta el número que la persona pensó
  - cuando llegue al último número (el que la persona pensó), usando console.log() muestre el mensaje "LO ENCONTRÉ ESTÁ PENSANDO EN EL NÚMERO: <INSERTE EL NÚMERO>"
*/

// let myNumb = prompt("Inserte su numero favorito");
// // si valor de prompt es letras, o mayor que el rango = 50, pregunte de nuevo
// while (myNumb > 50) {
//   myNumb = prompt("Vuelve a intentar");
// }

// for (let i = 0; i < myNumb; i++) {
//   console.log(i);
//   // if (i == myNumb) {
//   //   console.log("lo encontre");
//   // }
// }

// console.log(`${myNumb} Lo encontre`);

/*
  Ejercicio 2 - FizzBuzz
  Usando console.log() cuente de 1 - 100, si el número es multiplo de 3 en vez del número diga "Fizz", si el número es multiplo de 5 en vez del número diga "Buzz"
  pero si el número es multiplo de 3 y de 5... diga "FizzBuzz";
*/

for (let counter = 1; counter < 100; counter++) {
  if (counter % 3 === 0 && counter % 5 === 0) {
    console.log('FizzBuzz');
  } else if (counter % 3 === 0) {
    console.log('Fizz');
  } else if (counter % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(counter);
  }
}

// console.log("link multiplos de https://es.stackoverflow.com/questions/258930/c%C3%B3mo-validar-si-un-n%C3%BAmero-es-m%C3%BAltiplo-de-5");
