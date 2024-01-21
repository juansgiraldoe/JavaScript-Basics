const cart = [
  {nombre: 'Celular', precio: 600,},
  {nombre: 'Mouse', precio: 50,},
  {nombre: 'Laptop', precio: 800,},
  {nombre: 'Teclado', precio: 300,},
  {nombre: 'Crgador', precio: 100,},
];

//No crea nuevo arreglo (Undefined)
const arrayForEach = cart.forEach( function (item) {
  return `El precio de ${item.nombre} es de ${item.precio}`
})
console.log(arrayForEach);

//Map crea una variable nueva con un arreglo.
const newArray = cart.map( function (i) {
  return `El precio de ${i.nombre} es de ${i.precio}`
})
console.table(newArray);