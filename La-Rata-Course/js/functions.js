/*
  Ejercicio 1 - Mind reader:

  Usando la funcion prompt() de JS, pidale al usuario que piense en un número entre 1 y 50 = de alli para alla no no no no
  - si el número NO está en el rango... preguntele de nuevo
  - si el numero SI está en el rango... usando console.log() cuente de 1 hasta el número que la persona pensó
  - cuando llegue al último número (el que la persona pensó), usando console.log() muestre el mensaje "LO ENCONTRÉ ESTÁ PENSANDO EN EL NÚMERO: <INSERTE EL NÚMERO>"
*/



function favNumber() {
    let myNumb = prompt("Inserte su numero favorito");
// si valor de prompt es letras, o mayor que el rango = 50, pregunte de nuevo
    if (myNumb > 50) {
        return "Paila";
    }

    for (let i = 0; i < myNumb; i++) {
        console.log(i);
        // if (i == myNumb) {
        //   console.log("lo encontre");
        // }
    }

    return `Lo Encontre su numero es ${myNumb}`;
};

console.log(favNumber());
