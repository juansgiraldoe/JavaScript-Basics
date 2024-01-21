//Buenas practicas.

const autenticado = true;

//Dar por implicito que es un bool y no hacer ===
if (autenticado) {
  console.log('Puedes ver Netflix')
} else {
  console.log('No puedes ver aun. ¡Suscribete!')
}

//Operador ternario

console.log( autenticado ? 'Si esta logueado' : 'No esta logueado.');