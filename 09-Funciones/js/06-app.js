//Parametros por default.
//Parametros que toma la funcion cuando no se le pasan los argumentos.

function saludar(name = '', lastName = '') {
  console.log(`Hola ${name}`);
  console.log(`Hola ${lastName}`);
}

saludar();