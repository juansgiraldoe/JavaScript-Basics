//Eliminacion de elementos del DOM.

//Eliminar por si mismo
const primerEnlace = document.querySelector('a')
primerEnlace.remove();

//Eliminar desde el padre.
const nav = document.querySelector('.navegacion')
console.log(nav.children);
nav.removeChild(nav.children[2]);