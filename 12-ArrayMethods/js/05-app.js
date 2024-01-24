//.find
//Crea un nuevo arreglo del primer elemento que cumpla la condicion.

const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]

//con forEach.
let res = '';
carrito.forEach ( ( prod, index ) => {
  if (prod.nombre === 'Televisión') {
    res = carrito[index]
  }
})
console.log(res);

//.find

const res_2 = carrito.find( (prod) => prod.nombre === 'Tablet')
console.log(res_2);