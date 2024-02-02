//Generacion de HTML con JS.

//Creamos la etiqueta.
const enlace = document.createElement('A');
//Agregando texto.
enlace.textContent = 'Nuevo enlace';
//Agregando href
enlace.href = '#';
//Agregando target.
enlace.target = '_blank';

const nav = document.querySelector('.navegacion')
//Agregamos al html al final.
nav.appendChild(enlace)

//Agregamos html en posiciones personalizadas.
nav.insertBefore(enlace, nav.children[1])

//Creando un card de forma dinamica.

const p1 = document.createElement('p')
p1.textContent = 'Concierto'
p1.classList.add('categoria', 'concierto')

const p2 = document.createElement('p')
p2.textContent = 'Concierto de Rock'
p2.classList.add('titulo')

const p3 = document.createElement('p')
p3.textContent = '800 por persona'
p3.classList.add('precio')
//Crear la info
const info = document.createElement('div')
info.classList.add('info')
info.appendChild(p1)
info.appendChild(p2)
info.appendChild(p3)
//Crear la imagen.
const image = document.createElement('img')
image.src = 'img/hacer2.jpg'
image.alt = 'Texto alternativo.'

const card = document.createElement('div')
card.classList.add('card')
card.appendChild(image)
card.appendChild(info)

const contenedor = document.querySelector('.hacer .contenedor-cards')
contenedor.insertBefore(card, contenedor.children[0])