//Funciones que retornan valores.

function sumar( a, b ) {
  return a + b;
}
//Debe haber una variable que reciba el valor retornado
const result = sumar(2, 3)

console.log(result);

//Ejemplo practico.

let total = 0;
//La funcion suma lo que agreguemos al carrito al valor del total.
function agregarCarrito(precio) {
  return total +=precio
}
//Asignamos los nuevos valores al total desde la funcion.
total = agregarCarrito(100);
total = agregarCarrito(250);
console.log(total);
//Calculamos el valor final con impuestos.
function calcTax(t) {
  return t * 1.15;
}
//Asignamos el valor final a una variable y la imprimimos.(con toFixed establecemos la cantidad de decimales a mostrar).
const totalPagar = calcTax(total).toFixed(2)
console.log(`El total a pagar es de ${totalPagar}`);
