//for loop

for (let i = 0; i <= 10; i += 2) {
  console.log(`Numero: ${i}`);
}

for ( let i = 1; i <= 20 ; i++ ) {
  if ( i % 2 === 0) {
    console.log(`El numero ${i} es par.`);
  }else {
    console.log(`El numero ${i} es impar.`);
  }
}

const cart = [
  {nombre: 'Celular', precio: 600,},
  {nombre: 'Mouse', precio: 50,},
  {nombre: 'Laptop', precio: 800,},
  {nombre: 'Teclado', precio: 300,},
  {nombre: 'Crgador', precio: 100,},
];
console.log( cart.length );
for (let i = 0; i < cart.length; i++) {
  console.log(cart[i].nombre);; 
}