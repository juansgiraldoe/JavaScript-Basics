//Arrow function con map y forEach
const cart = [
  {nombre: 'Celular', precio: 600,},
  {nombre: 'Mouse', precio: 50,},
  {nombre: 'Laptop', precio: 800,},
  {nombre: 'Teclado', precio: 300,},
  {nombre: 'Crgador', precio: 100,},
];

//
// const arrayForEach = cart.forEach( function (item) {
//   return `El precio de ${item.nombre} es de ${item.precio}`
// })
// console.log(arrayForEach);
//
const newArray = cart.map(i =>`El precio de ${i.nombre} es de ${i.precio}`)
cart.forEach( item => console.log(`El precio de ${item.nombre} es de ${item.precio}`));
console.log(newArray);