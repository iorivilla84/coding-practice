/*
  1) Crear un objeto que va a representar un hotel con las siguientes propiedades y metodos
      name, totalRooms, reservedRooms, makeReservation, checkAvailability, numOfRoomsAvailable
  - el nombre es Hotel Marrakesh
  - tiene 250 habitaciones en total
  - hay 182 habitaciones reservadas
  - un metodo que reciba un parametro 'rooms', con el numero de habitaciones que se van a 
    reservar y que aumente el numero de habitaciones reservadas
  - un metodo que 'returns' un boolean, true si hay habitaciones disponibles y false si no
  - un metodo que 'returns' el # de habitaciones disponibles

  para probarlo, correr los siguientes comandos
  
  
  console.log("Rooms available?: ", checkAvailability());
  console.log("# of rooms: ", numOfRoomsAvailable());
  console.log("Making a Reservation...");
  makeReservation(4);
  console.log("Rooms available?: ", checkAvailability());
  console.log("# of rooms: ", numOfRoomsAvailable());

*/

console.log("<!--------- Challenge 1 -------->");

const hotelVilla = {
  name: "Hotel Villa",
  totalRooms: 250,
  reservedRooms: 182,
  makeReservation(rooms) {
    return this.reservedRooms += rooms;
  },
  roomsAvailable() {
    return this.totalRooms - this.reservedRooms;
  },
  checkAvailability() {
    return this.roomsAvailable() > 0;
  }
}

console.log('Reserved Rooms:', hotelVilla.makeReservation(5));
console.log('Rooms left:', hotelVilla.roomsAvailable());
console.log('Rooms available', hotelVilla.checkAvailability());

/*
  2) Crear una clase Hotel que te permita crear multiples hoteles con
    las mismas propiedades y metodos que arriba
    - crear 3 hoteles "Hotel Capri", "Hotel Viejo Ping", "Hotel Kanguro"
    - inventate el # de habitaciones totales y el # de reserva
    - pero que el "function signature" tenga valores default en los parametros
      para que si no pasas algun valor, al crear un nuevo hotel. 
      La funcion le ponga al hotel por default estos valores
        - name: "Condoricosas"
        - totalRooms: 0
        - reservedRooms: 0

    - Crea un cuarto hotel con los valores default
    - Despues de haberlo creado modificale el numero de habitaciones a 500
      y de reservas a 350 (TIP: acordate como accedes y modificas una propiedad de un objeto)
  
      para probarlo, correr los siguientes comandos para cada uno de los 4 hoteles

  console.log("Rooms available?: ", checkAvailability());
  console.log("# of rooms: ", numOfRoomsAvailable());
  console.log("Making a Reservation...");
  makeReservation(5);
  console.log("Rooms available?: ", checkAvailability());
  console.log("# of rooms: ", numOfRoomsAvailable());
*/

console.log("<!--------- Challenge 2 -------->");


// crear 3 hoteles "Hotel Capri", "Hotel Viejo Ping", "Hotel Kanguro"
console.log("<!--------- Hotel 1 -------->");


console.log("<!--------- Hotel 2 -------->");



console.log("<!--------- Hotel 3 -------->");


/* 
- Crea un cuarto hotel con los valores default
    - Despues de haberlo creado modificale el numero de habitaciones a 500
      y de reservas a 350 (TIP: acordate como accedes y modificas una propiedad de un objeto)
  
      para probarlo, correr los siguientes comandos para cada uno de los 4 hoteles
 */

console.log("<!--------- Hotel Default -------->");


/*
  3) MODO SAIYAYIN FASE 4 NO APTO PARA POLLOS
  - Crea una funcion/clase que se llame ElHostalDeGoku que requiera 3 parametros 'name', 'totalRooms' y 'ratesMap'
  - con defaults name => "El Hostal De Goku", totalRooms => 0, ratesMap => no tiene default y SIEMPRE es requerido
  - Esta es la tabla de cuanto vale 1 noche en 1 habitacion segun el dia
    y cuantas habitaciones YA estan reservadas cada dia

    LUNES:      $100      35  habitaciones
    MARTES:     $90       25  habitaciones 
    MIERCOLES:  $80       12  habitaciones
    JUEVES:     $95       65  habitaciones
    VIERNES:    $120      92  habitaciones
    SABADO:     $150      100 habitaciones
    DOMINGO:    $135      96  habitaciones

  - Crea un hotel que se llame "La Torre del Maestro Karin"
  - que tenga 100 habitaciones en total
  - Despues de haber creado "La Torre del Maestro Karin" agregale 
    un metodo que se llame makeReservationByDate, 
    que reciba dos parametros, 
      (1) el # de habitaciones que se van a reservar 
      (2) el dia de la semana (e.g. 'Domingo') que quiere reservar,
    el metodo tiene que return un mensaje que diga
      - Opcion 1: si solo se reservo 1 habitacion
        "Your room have been reserved. See you on <dia que haya reservado>. Your total is: $<total>"
      
      - Opcion 2: si reserveo multiples habitaciones
       "Your rooms have been reserved. You reserved <# de habitaciones que reservo> rooms. See you on <dia que haya reservado>. Your total is: $<total>"
      
      - Opcion 3: No se pudo reservar
        "Ohh.. unfortunately we can't complete your reservation."

  TIPS: 
    - Como podrias pasarle esa tabla a tu clase como argumento cuando crees un nuevo instance de la funcion ElHotelDeGoku?
    - Si tratas de crear un nuevo hotel, y no le pasas ratesMap como argumento, el tiene que decirte "Ooops, you're missing a rate map"
    - Como chequeas que te hayan pasado un argumento?
    - Como podrias poner la informacion de la tabla en una variable para poder  acceder a ella 
      y mirar cuanto le va a valer la reserva? y si puede o no hacer la reserva?
    - que tipo de dato o que combinacion de tipos de datos te ayudaria a representar esa tabla de la mejor manera?
      - string? number? boolean? array? object? array of objects? object of arrays? arrays of arrays? object of objects? etc... etc... etc...

    - Para probarlo corre estas funciones
    const hotelDePrueba = new ElHostalDeGoku(); // "Ooops, you're missing a rate map"
    const krilinInn = new ElHostalDeGoku("Krilin Inn"); // "Ooops, you're missing a rate map"
    const pulgas = new ElHostalDeGoku("Pulgas", ratesMap); // "Ooops, you're missing a rate map"
    const hostalExito = new ElHostalDeGoku("Hostal Exito", 200, rateMap);

    hotalExito.makeReservationByDate("Sabado", 1); // "Ohh.. unfortunately we can't complete your reservation."
    hotalExito.makeReservationByDate("Lunes", 5); // "Your rooms have been reserved. You reserved 5 rooms. See you on Lunes. Your total is: $500"
    hotelExito.makeReservationByDate("Martes", 20) // "Ohh.. unfortunately we can't complete your reservation."
    hotalExito.makeReservationByDate("Jueves", 1); // "Your room have been reserved. See you on Jueves. Your total is: $95"

*/
/*   LUNES:      $100      35  habitaciones
    MARTES:     $90       25  habitaciones 
    MIERCOLES:  $80       12  habitaciones
    JUEVES:     $95       65  habitaciones
    VIERNES:    $120      92  habitaciones
    SABADO:     $150      100 habitaciones
    DOMINGO:    $135      96  habitaciones */

    // [
    //   {day: 'Lunes', price: 100, rooms: 35},
    //   {day: 'Martes', price: 90, rooms: 25},
    //   {day: 'Miercoles', price: 80, rooms: 12},
    //   {day: 'Jueves', price: 95, rooms: 65},
    //   {day: 'Viernes', price: 120, rooms: 92},
    //   {day: 'Sabado', price: 150, rooms: 100},
    //   {day: 'Domingo', price: 135, rooms: 96},
    // ],

console.log("<!--------- Challenge 3 -------->");




// const laTorreDelMaestroKarin = new ElHostalDeGoku('La Torre del Maestro Karin', 100, agendaReservas);

// console.log(laTorreDelMaestroKarin.name);
// console.log(laTorreDelMaestroKarin.rooms);
// console.log(laTorreDelMaestroKarin.makeReservationByDate("lunes",1));


//const hotelDePrueba = new ElHostalDeGoku(); // "Ooops, you're missing a rate map"
    //const krilinInn = new ElHostalDeGoku("Krilin Inn"); // "Ooops, you're missing a rate map"
    //const pulgas = new ElHostalDeGoku("Pulgas", agendaReservas); // "Ooops, you're missing a rate map"


    //hostalExito.makeReservationByDate("sabado", 1); // "Ohh.. unfortunately we can't complete your reservation."
