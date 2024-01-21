//Añadir elementos con Spread Operator.

const carrito = [];

//Definir un producto
const producto = {
  name: 'Monitor 20"',
  price: 650,
}
const producto_2 = {
  name: 'iPhone 11 Pro',
  price: 1050,
}
const producto_3 = {
  name: 'Teclado Mecanico',
  price: 320,
}

let resultado;
resultado = [...carrito, producto]
resultado = [...resultado, producto_2]
resultado = [...resultado, producto_3]

console.table(resultado)