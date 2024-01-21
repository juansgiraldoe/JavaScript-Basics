//Buenas practicas en el uso de if
/*
1. Dar por implicito el true en un if y no usar == o ===
2. Agregar return para parar la evaluacion de condiciones.
*/

const autenticado = true

if (!autenticado) {
  console.log('S');
} else {
  console.log('N');
}

const puntaje = 199;

function revisarPuntaje() {
  if ( puntaje >= 400 ) {
    console.log('Sobresaliente');
    return;
  }
  if ( puntaje >=300 ) {
    console.log('Regular');
    return;
  }
  if ( puntaje >=200 ) {
    console.log('Malo');
    return;
  }
  if ( puntaje <= 200 ) {
    console.log('Pesimo');
    return;
  }
}
revisarPuntaje();