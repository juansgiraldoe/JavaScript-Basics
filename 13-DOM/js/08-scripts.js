//Traversing the dom.


const navegacion = document.querySelector('.navegacion');
console.log(navegacion.firstElementChild.textContent);
console.log(navegacion.lastElementChild.textContent);
console.log(navegacion.childNodes); //Los espacios en blancos son considerados elementos (Saltos de linea en HTML).
console.log(navegacion.children);//Lista elementos reales.
console.log(navegacion.children[0]);
console.log(navegacion.children[1].nodeName);
console.log(navegacion.children[2].nodeType);


const card = document.querySelector('.card');

//Ejemplo practico de traversing document --> Encontrar los caminos desde los nodos hasta los elementos.
card.children[1].children[1].textContent =  'Nuevo Title Card'
card.children[0].src = 'img/hacer2.jpg';

//Traversing inverso, elementos padres.
console.log(card.parentElement.parentElement);

//Traversing entre elementos hermanos siguientes.
console.log(card.nextElementSibling.children[1].children[1].textContent);

//Traversing entre elementos hermanos anteriores.

const lastCard = document.querySelector('.card:nth-child(4');
console.log(lastCard.children[1].children[1].textContent);
console.log(lastCard.previousElementSibling.children[1].children[1].textContent);