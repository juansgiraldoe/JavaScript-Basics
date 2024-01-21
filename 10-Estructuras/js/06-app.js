//Operador Y (&&).
//Revisar que todas las condicones se cumplan.

const user = false,
      pay = true;

if ( user && pay ) {
  console.log('Si puedes comprar');
} else if ( !user && !pay ){
  console.log('No puedes comprar.');
} else if ( !user ){
  console.log(`Registrate o inicia sesion.`);
} else if ( !pay ){
  console.log(`No tienes fondos suficientes.`);
}

//Se ejecutan en orden desendente la primera que se cumpla.