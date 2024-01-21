//Other object methods.

"use strict"
const product = {
  title: 'iPhone',
  ref: '11 Pro',
  aviable: true,
  precio: 600,
};
//Retorna un array con los keys del objeto.
console.log(Object.keys( product ));

//Retorna un array con los valores que hay en las keys.
console.log(Object.values( product ));

//Retorna un array por cada key junto a su valor.
console.log(Object.entries( product ));