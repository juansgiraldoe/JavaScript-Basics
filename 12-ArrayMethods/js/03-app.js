//.reduce

const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]

let total = 0
carrito.forEach( prod => {
  total += prod.precio
})
console.log(total);

///Ejemplo con reduce.

let res = carrito.reduce( ( t, p ) => t + p.precio, 0)
console.log(res);