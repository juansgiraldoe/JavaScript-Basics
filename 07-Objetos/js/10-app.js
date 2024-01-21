//Unir 2 objetos.

"use strict"
const product = {
  title: 'iPhone',
  ref: '11 Pro',
  aviable: true,
  precio: 600,
};

const medidas = {
  width: '20px',
  height: '10rem'
}

//Opcion 1

const resultado = Object.assign(product, medidas)

//Opcion 2 (Spread Operator)

const resultado_2 = {...product, ...medidas}

console.log(resultado);
console.log(resultado_2);