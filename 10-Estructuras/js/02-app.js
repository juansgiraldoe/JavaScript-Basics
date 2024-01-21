//Comparadores en condicionales.

const puntaje = 900;
const puntaje_2 = 500;

//! = ... == Diferencia no estricta, (Solo revisa el valor y no el tipo).
if (puntaje != 900) {
  console.log('Si es diferente');
} else {
  console.log('No es diferente');
}
//Comparador estricto, ! = = Operador de diferencia estricta. (Revisan tipo y valor).
if (puntaje === '900') {
  console.log('Si es igual');
} else {
  console.log('No es igual');
}

if (puntaje_2 !== '500') {
  console.log('Si es diferente.');
} else {
  console.log('No es diferente.');
}