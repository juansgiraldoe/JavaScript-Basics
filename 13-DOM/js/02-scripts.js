//Seleccionar a los elementos por su clase.

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

//Si las clases existen mas de una vez:

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

//Si la clase no existe:

const noE = document.getElementsByClassName('noexiste');
console.log(noE);