//Añadir elementos al final o al inicio de un array.

const months = ['Enero', 'Febrero', 'Marzo'];

//Agregar al final (.push)
months.push('Abril')
months.push('Mayo')

console.table(months)

///////////////////////////////////////////////////////

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

carrito.push(producto)
carrito.push(producto_2)

//Agregar al inicio del array
carrito.unshift(producto_3)

console.table(carrito)