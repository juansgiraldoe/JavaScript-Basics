//Do While. Se ejecuta una vez y luego verifica la condición.

//Inicio
let x = 0;

do {
  console.log(`Numero: ${x}`);
  //Incremento.
  x++
} while ( x < 10 ); //Condición.

//FizzBuzz
let i = 1;

do {
  if ( i % 15 === 0){
    console.log(`${i} FizzBuzz`);
  } else if ( i % 3 === 0 ) {
    console.log(`${i} Fizz`);
  } else if ( i % 5 === 0 ) {
    console.log(`${i} Buzz`);
  }
  i++
} while ( i <= 100 );