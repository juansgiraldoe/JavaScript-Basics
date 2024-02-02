//Comentario de una linea.

/*
Comentario multilinea.
*/

const nombre = prompt('¿Cual es tu nombre?');

//Comentar para describir que hace nuestro codigo. (Toma el nombre y lo muestra en pantalla.)
document.querySelector('.contenido').innerHTML = `${nombre} esta aprendiendo JavasCript Moderno.`;
