//Eventos con el mouse.

const nav = document.querySelector('.navegacion');

//Registrar un evento Click.
nav.addEventListener('click', () => {
  console.log('Click en nav');
})

//Registrar un evento 'Hover'.
nav.addEventListener('mouseenter', () => {
  console.log('Entrando al nav');
})

//Registrar salida de un elemento.
nav.addEventListener('mouseout', () => {
  console.log('Saliendo del nav');
})

//Registrar presion de click en mouse.
nav.addEventListener('mousedown', () => {
  console.log('Oprimiendo');
})

//Registrar soltar el click en mouse.
nav.addEventListener('mouseup', () => {
  console.log('Soltando');
})

//Registrar doble click.
nav.addEventListener('dblclick', () => {
  console.log('Doble click');
})