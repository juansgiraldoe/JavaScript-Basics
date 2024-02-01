//Seleccionar elementos con querySelector

const card = document.querySelector('.card');
console.log(card);

//Posibilidad de tener selectores especificos tipo CSS (Especificidad).

const info = document.querySelector('.premium .info');
console.log(info);

//Seleccionar elementos diferentes del primero.

const card2 = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(card2);

//querySelector en id's:

const form = document.querySelector('#formulario')
console.log(form);
//Si hay varios elementos con el mismo id, selecciona el primero de arriba hacia abajo.

const nav = document.querySelector('nav')
console.log(nav);