//.findIndex

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach( ( mes, i ) => {
  if ( mes === 'Abril') {
    console.log(i);
  }
})

//Encontrar el indice de abril

const indice = meses.findIndex( mes => mes === 'Abril')
console.log(indice);

//Encontrar el indice en array de objetos.
const indice_2 = carrito.findIndex( prod => prod.nombre === 'Tablet')
console.log(indice_2);