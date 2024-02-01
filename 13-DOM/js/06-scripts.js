//Modificar textos e imagenes con JS.

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

console.log(encabezado.innerText);//Si en CSS hay VISIBILITY: hidden no lo va a encontrar.
console.log(encabezado.textContent);
console.log(encabezado.innerHTML);//Se tare el HTML.

//Podemos usar chaining.
const encabezado_2 = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado_2);

//Modificacion dle html (DOM)
document.querySelector('.contenido-hero h1').textContent = 'Nuevo header';

const imagen = document.querySelector('.card img');

imagen.src = 'img/hacer2.jpg';