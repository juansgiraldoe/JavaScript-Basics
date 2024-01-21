//Acceso a los valores de los arrays.

const numbers = [ 10, 20, 30, 40, 50 ];

console.log(numbers);
console.log(numbers[0]);
console.log(numbers[2]);
console.table(numbers);


//Acceso a Arrays profundos (Anidados).
const numbers_2 = [ 10, 20, 30, [1, 2, 3] ];

console.log(numbers_2[3][1])