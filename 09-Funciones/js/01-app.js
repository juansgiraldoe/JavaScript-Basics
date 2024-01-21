//Intrucción a funciones.
//Son procedimientos o instrucciones que ejecutan una acción. Son reutilizables.

//Function declaration
function suma( a, b ) {
  console.log( a + b );
}
//Llamar o ejecutar funciones.
suma( 2, 5 );



//Function expression. (Funciones que se guardan en variables).
const sumar_2 = function ( y, z ) {
  console.log( y + z );
}
sumar_2( 10,7 )