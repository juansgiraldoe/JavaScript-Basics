//Operador ternario.

const autenticado = false;
const pago = true;
/*
console.log( autenticado && pago ? 'Puede pagar' : 'No puede pagar.');
console.log( autenticado || pago ? 'Puede pagar' : 'No puede pagar.');
*/
//Ternarios anidados.
console.log( autenticado ? pago ? 'Si esta autenticado y puede pagar' : 'Si esta autenticado pero no puede pagar' : `Crea una cuenta o inicia sesion.`);