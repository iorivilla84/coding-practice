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
const vipepaHotel = {
  name: "Vipepa Hotel",
  totalRooms: 250,
  reservedRooms: 182,
  makeReservation(rooms) {
    this.reservedRooms += rooms;
  },
  numOfRoomsAvailable() {
    return this.totalRooms - this.reservedRooms;
  },
  checkAvailability() {
    return this.numOfRoomsAvailable() > 0;
  }
};

console.log("Name is: ", vipepaHotel.name);
console.log("Rooms available?: ", vipepaHotel.checkAvailability());
console.log("# of rooms: ", vipepaHotel.numOfRoomsAvailable());
console.log("Making a Reservation...");
vipepaHotel.makeReservation(5);
console.log("Rooms available?: ", vipepaHotel.checkAvailability());
console.log("# of rooms: ", vipepaHotel.numOfRoomsAvailable());


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
const Hotel = function(name = 'Condoricosas', totalRooms = 0, reservedRooms = 0) {
  this.name = name;
  this.rooms = totalRooms;
  this.reserved = reservedRooms;
  this.makeReservation = function(numrooms) {
    this.reserved += numrooms;
  };
  this.checkAvailability = function() { // check first point challenge
    if (this.reserved < this.rooms) {
      return true
    } else {
      return false
    }
  },
  this.numOfRoomsAvailable = function() { // check first point challenge
    return this.rooms - this.reserved;
  }
}

// crear 3 hoteles "Hotel Capri", "Hotel Viejo Ping", "Hotel Kanguro"
console.log("<!--------- Hotel 1 -------->");
const hotelCapri = new Hotel('Hotel Capri', 300, 200)
console.log("Name is: ", hotelCapri.name);
console.log("Rooms available?: ", hotelCapri.checkAvailability());
console.log("# of rooms: ", hotelCapri.numOfRoomsAvailable());
console.log("Making a Reservation...");
hotelCapri.makeReservation(10);
console.log("Rooms available?: ", hotelCapri.checkAvailability());
console.log("# of rooms: ", hotelCapri.numOfRoomsAvailable());


console.log("<!--------- Hotel 2 -------->");
const hotelViejoPing = new Hotel('Hotel Viejo Ping', 150, 10)
console.log("Name is: ", hotelViejoPing.name);
console.log("Rooms available?: ", hotelViejoPing.checkAvailability());
console.log("# of rooms: ", hotelViejoPing.numOfRoomsAvailable());
console.log("Making a Reservation...");
hotelViejoPing.makeReservation(5);
console.log("Rooms available?: ", hotelViejoPing.checkAvailability());
console.log("# of rooms: ", hotelViejoPing.numOfRoomsAvailable());


console.log("<!--------- Hotel 3 -------->");
const hotelKanguro = new Hotel('Hotel Kanguro', 400, 250)
console.log("Name is: ", hotelKanguro.name);
console.log("Rooms available?: ", hotelKanguro.checkAvailability());
console.log("# of rooms: ", hotelKanguro.numOfRoomsAvailable());
console.log("Making a Reservation...");
hotelKanguro.makeReservation(15);
console.log("Rooms available?: ", hotelKanguro.checkAvailability());
console.log("# of rooms: ", hotelKanguro.numOfRoomsAvailable());

/* 
- Crea un cuarto hotel con los valores default
    - Despues de haberlo creado modificale el numero de habitaciones a 500
      y de reservas a 350 (TIP: acordate como accedes y modificas una propiedad de un objeto)
  
      para probarlo, correr los siguientes comandos para cada uno de los 4 hoteles
 */

console.log("<!--------- Hotel Default -------->");
const hotelCondoriCosas = new Hotel()
console.log("Name is: ", hotelCondoriCosas.name);
hotelCondoriCosas.rooms = 500;
hotelCondoriCosas.reserved = 350;
console.log("Rooms available?: ", hotelCondoriCosas.checkAvailability());
console.log("# of rooms: ", hotelCondoriCosas.numOfRoomsAvailable());
console.log("Making a Reservation...");
hotelCondoriCosas.makeReservation(50);
console.log("Rooms available?: ", hotelCondoriCosas.checkAvailability());
console.log("# of rooms: ", hotelCondoriCosas.numOfRoomsAvailable());

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

const ElHostalDeGoku = function(name = 'El Hostal De Goku', finalRooms = 0, ratesMap) {
  if (!ratesMap) {
    console.log("Ooops, you're missing a rate map");
  }
  this.name = name;
  this.rooms = finalRooms;
  this.ratesMap = ratesMap;

  this.makeReservationByDate = function(weekday, roomsToReserve) {
    const { rate, roomsReserved } = this.ratesMap[weekday];
    const roomsAvailableForThatDay = this.rooms - roomsReserved;
    const canMakeReservation = roomsToReserve < roomsAvailableForThatDay;
    if (canMakeReservation) {
      if (roomsToReserve === 1) {
        console.log(`Your room have been reserved. See you on ${weekday}. Your total is: $ ${rate}`);
      } else {
        console.log(`Your rooms have been reserved. You reserved ${roomsToReserve} rooms. See you on ${weekday}. Your total is: $ ${rate}`);
      }
    } else {
      console.log("Ohh.. unfortunately we can't complete your reservation.");
    }
  }
}

const agendaReservas = {
  lunes: { rate: 100, roomsReserved: 35 },
  martes: { rate: 90, roomsReserved: 25 },
  miercoles: { rate: 80, roomsReserved: 12 },
  jueves: { rate: 95, roomsReserved: 65 },
  viernes: { rate: 120, roomsReserved: 92 },
  sabado: { rate: 150, roomsReserved: 100 },
  domingo: { rate: 135, roomsReserved: 96 }
};

// const laTorreDelMaestroKarin = new ElHostalDeGoku('La Torre del Maestro Karin', 100, agendaReservas);

// console.log(laTorreDelMaestroKarin.name);
// console.log(laTorreDelMaestroKarin.rooms);
// console.log(laTorreDelMaestroKarin.makeReservationByDate("lunes",1));


//const hotelDePrueba = new ElHostalDeGoku(); // "Ooops, you're missing a rate map"
    //const krilinInn = new ElHostalDeGoku("Krilin Inn"); // "Ooops, you're missing a rate map"
    //const pulgas = new ElHostalDeGoku("Pulgas", agendaReservas); // "Ooops, you're missing a rate map"
    const hostalExito = new ElHostalDeGoku("Hostal Exito", 200, agendaReservas);

    //hostalExito.makeReservationByDate("sabado", 1); // "Ohh.. unfortunately we can't complete your reservation."
    hostalExito.makeReservationByDate("lunes", 5); // "Your rooms have been reserved. You reserved 5 rooms. See you on Lunes. Your total is: $500"
    hostalExito.makeReservationByDate("martes", 20) // "Ohh.. unfortunately we can't complete your reservation."
    hostalExito.makeReservationByDate("jueves", 1); // "Your room have been reserved. See you on Jueves. Your total is: $95"