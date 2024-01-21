//Operador O OR (||).
//Revisar que al menos una de las condicones se cumplan.

const efectivo = 700,
      credito = 1000,
      disponible = efectivo + credito,
      totalAPagar = 1600;

if ( efectivo > totalAPagar || credito > totalAPagar || disponible > totalAPagar ) {
  console.log(`Puedes pagar.`);
} else {
  console.log(`Fondos insuficientes.`);
}

//if anidado (if's dentro de if's)
if ( efectivo >= totalAPagar || credito >= totalAPagar || disponible >= totalAPagar ) {
  if ( efectivo >= totalAPagar ) {
    console.log(`Vas a pagar con efectivo.`);
  } else if ( credito >= totalAPagar ){
    console.log(`Pagaras con credito.`);
  } else if ( disponible >= totalAPagar ){
    console.log(`Vas a pagar con el efectivo y el credito.`);
  }
} else {
  console.log(`Fondos insuficientes.`);
}