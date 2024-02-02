//Eventos con el teclado.

const busqueda = document.querySelector('.busqueda');

//Registro de presion de teclas.
busqueda.addEventListener('keydown', () => {
  console.log('Escribiendo');
})

//Registro de levantar teclas.
busqueda.addEventListener('keydown', () => {
  console.log('Soltando');
})

//Registro de salida de inputs.
busqueda.addEventListener('blur', () => {
  console.log('Saliendo');
})

//Registro de copia de textos.
busqueda.addEventListener('copy', () => {
  console.log('Copiando');
})

//Registro de pegar textos.
busqueda.addEventListener('paste', () => {
  console.log('Pegando');
})

//Registro cualquier evento en el input menos el 'blur.
busqueda.addEventListener('input', () => {
  console.log('Pegando');
})

//Registro cualquier evento en el input menos el 'blur.
busqueda.addEventListener('input', (e) => {
  console.log(e.target.value);
})