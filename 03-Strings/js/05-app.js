//Other methods.

const testing = 'Monitor de 20 pulgadas 2024'

//Reemplaza un valor por otro.
console.log(testing.replace('pulgadas', '"'));
console.log(testing.replace('Monitor', 'Monitor curvo'));

//Cortar desde X posicion hasta X posicion.
console.log(testing.slice(0, 10));
console.log(testing.slice(8)); //Corta desde esa posicion hasta el final del string.
console.log(testing.slice(12, 10)); //No hace nada

//Alternativa a slice
console.log(testing.slice(0, 10)); //Funciona igual que slice.
console.log(testing.slice(12, 10)); //Lo invierte

// chartAt
const usuario = 'Sebastian';
console.log(usuario.charAt(0)); // Retorna el caracter de una posicion.