//.filter
//Crea un nuevo arreglo basado en las condiciones que demos.

const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]

let newArray;
newArray = carrito.filter( prod => prod.precio >=400 )
console.log(newArray);

let newArray_2;
newArray_2= carrito.filter( prod => prod.nombre !== 'Teclado' )
console.log(newArray_2);