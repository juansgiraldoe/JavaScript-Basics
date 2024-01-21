//Fizz Buzz
/*
1. Elementos multiplos de 3 imprimen Fizz.
2. Elementos multiplos de 5 imprimen Buzz.
3. Elementos multiplos de 3 y 5 (15) imprimen FizzBuzz.
*/

for (let i = 1; i <= 100; i++) {
  if ( i % 15 === 0){
    console.log(`FizzBuzz`);
    continue;
  } else if ( i % 3 === 0 ) {
    console.log(`Fizz`);
    continue;
  } else if ( i % 5 === 0 ) {
    console.log(`Buzz`);
    continue;
  }
  console.log(i);
}