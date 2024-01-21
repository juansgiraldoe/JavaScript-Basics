//Eliminar elementos al final o al inicio de un array.

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
carrito.unshift(producto_3)
console.table(carrito)

//Eliminar ultimo elemento del array.
carrito.pop()
console.table(carrito)

//Eliminar primer elemento del array.
carrito.shift()
console.table(carrito)

//Eliminar segun indice del array (posicion inicial, numero de elementos a eliminar.)
carrito.push(producto_2)
carrito.splice(0, 1)
console.table(carrito)