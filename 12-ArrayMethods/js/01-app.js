//.some
//Valida si existe un valor en un arreglo de objetos. Tambien soporta arreglos con indices.

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Comprobar si un valor existe en un arreglo.

meses.forEach( mes => {
    if ( mes === 'Enero') {
        console.log('Enero si existe');
    }
})

//.includes
//Valida de acuerdo a indices.
const resultado = meses.includes('Enero')
console.log(resultado);

//.some
const existe = carrito.some( prod => (prod.nombre === 'Tablet_2'))
const existe_2 = meses.some( mes => mes === 'Marzo')
console.log(existe);
console.log(existe_2);