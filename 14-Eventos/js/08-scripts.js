// Evitar la propagación con contenido creado

//Creacion de parafo 1.
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');
//parrafo1.classList.add('concierto');

//Creacion de parafo 2.
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

//Creacion de parafo 3.
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');
parrafo3.onclick = () => {
  nuevaFucion(1);
}

//Creamos el div 'info'
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);

//Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

//Crear el Card..
const contenedorCard = document.createElement('div');
contenedorCard.classList.add('contenedorCard');

//Asignar la imagen al card.
contenedorCard.appendChild(imagen);

//Asignar el info.
contenedorCard.appendChild(info);

//Insertarlo en el HTML.
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(contenedorCard); // al inicio info

function nuevaFucion(id) {
  console.log('Desde la funcion', id);
}