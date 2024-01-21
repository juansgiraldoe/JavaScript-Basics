//Comparacion

const numero1 = 20,
      numero2 = '20',
      numero3 = 30;

console.log( numero1 == numero3);
console.log( numero1 == numero2); //True (Valida el valor mas no el tipo de dato.)
console.log( numero1 === numero2); //False (Valida el valor mas y tambien el tipo de dato.)
console.log( numero1 === parseInt(numero2)); //True (Convierte el tipo de dato a numero entero.)

//Diferente
const pasw = 'admin',
      pasw2 = 'Admin'

console.log( pasw != pasw2 );
console.log( numero1 != numero2 ); // Diferencia basica (Solo valor).
console.log( numero1 !== numero2 ); // Diferencia extricta. (Valor y tipo).