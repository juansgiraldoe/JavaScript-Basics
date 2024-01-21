//(.seal) Sellar el objeto.

"use strict"
const product = {
  title: 'iPhone',
  ref: '11 Pro',
  aviable: true,
  precio: 600,
};

Object.seal(product); //Sella el objeto, PERMITE modificar propiedades, pero impide eliminar o agregar nuevas.

// ✅ product.aviable = false
// ❌ product.image = 'img.jpg'
// ❌ delete product.precio;

console.log(product);

console.log(Object.isSealed(product)); //Consultamos si el objeto esta congelado o no.