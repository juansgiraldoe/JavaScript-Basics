//Diferencias entre expression y declaratión.
suma( 2, 5 );
function suma( a, b ) {
  console.log( a + b );
}

sumar_2( 10,7 )
const sumar_2 = function ( y, z ) {
  console.log( y + z );
}

//Las funciones declarativas pueden ser llamadas o ejecutadas antes de ser creadas. Hoisting.