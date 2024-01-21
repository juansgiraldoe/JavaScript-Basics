//Iterador while.
//Se ejecuta mientras una condicion sea verdadera.

//Inicializar el while.
let i = 1;
//Condición
while ( i <= 100 ) {
  //Instrucción.
  if ( i % 15 === 0){
    console.log(`${i} FizzBuzz`);
  } else if ( i % 3 === 0 ) {
    console.log(`${i} Fizz`);
  } else if ( i % 5 === 0 ) {
    console.log(`${i} Buzz`);
  }
  //Incremento.
  i++
}
