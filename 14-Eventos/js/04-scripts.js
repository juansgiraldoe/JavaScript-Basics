//Evento submit en el formulario.

const form = document.querySelector('#formulario')

form.addEventListener('submit', validationForm)

function validationForm(e) {
  e.preventDefault();
  console.log(e);
  console.log(e.target.action);
  console.log(e.target.method);
}