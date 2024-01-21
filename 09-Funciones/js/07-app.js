//Comunicacion entre funciones. Siempre debe haber una funcion que arranque todo el software.

iniciarApp();
function iniciarApp() {
  console.log('Iniciando App...');
  segundaFuncion();
}

function segundaFuncion() {
  console.log('Desde la segunda funcion.');
  autenticado('Sebastian');
}

function autenticado(usuario) {
  console.log('Autenticando usuario...');
  console.log(`¡Genial ${usuario}. Autenticado exitosamente!`);
}