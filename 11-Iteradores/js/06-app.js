//forEach y map
//Se ejecuta al menos una vez por cada elemento del arreglo.

const pendientes = ['Tarea', 'Comida', 'Proeycto', 'Aprendizaje']
pendientes.forEach( ( ( task, i ) => console.log( `La tarea ${i} es: ${task}`)))

const cart = [
  {nombre: 'Celular', precio: 600,},
  {nombre: 'Mouse', precio: 50,},
  {nombre: 'Laptop', precio: 800,},
  {nombre: 'Teclado', precio: 300,},
  {nombre: 'Crgador', precio: 100,},
];

cart.forEach( ( e, i ) => console.log(`El articlo numero ${i} es un ${e.nombre} con un precio de: ${e.precio}`));

//map crea un nuevo arreglo (array).
const newArray = cart.map( ( e, i ) => `El articlo numero ${i} es un ${e.nombre} con un precio de: ${e.precio}`);
console.table(newArray);