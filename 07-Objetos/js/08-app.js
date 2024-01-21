//Object methods.

//(.freeze)Congelar un objeto.
"use strict"
const product = {
  title: 'iPhone',
  ref: '11 Pro',
  aviable: true,
  precio: 600,
};

Object.freeze(product); //Congela el objeto, IMPIDE modificar propiedades, eliminar o agregar nuevas.

// ❌ product.aviable = false
// ❌ product.image = 'img.jpg'
// ❌ delete product.precio;

console.log(product);

console.log(Object.isFrozen(product)); //Consultamos si el objeto esta congelado o no.