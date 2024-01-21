//Break y Continue.

//Break rompe la ejecucion del iterador cuando agreguemos una condición.
for (let i = 0; i <= 10; i ++ ) {
  if ( i === 5 ) {
    console.log(`CINCO`);
    break;
  }
  console.log(`Numero: ${i}`);
}

//Continue rompe el ciclo actual y continua con los demas. (No ejecuta la sigueinte linea en el ciclo.)
for (let i = 0; i <= 10; i ++ ) {
  if ( i === 5 ) {
    console.log(`CINCO`);
    continue;
  }
  console.log(`Numero: ${i}`);
}

//Caso practico.
const cart = [
  {nombre: 'Celular', precio: 600,},
  {nombre: 'Mouse', precio: 50,},
  {nombre: 'Laptop', precio: 800, descuento: true,},
  {nombre: 'Teclado', precio: 300,},
  {nombre: 'Crgador', precio: 100,},
];

for (let i = 0; i < cart.length; i++) {
  if (cart[i].descuento) {
    console.log(`El articulo ${cart[i].nombre} tiene descuento`);
    continue;
  }
  console.log(cart[i].nombre);
  
}