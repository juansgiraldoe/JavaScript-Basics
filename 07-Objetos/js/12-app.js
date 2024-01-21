//Object constructor
//Hace que se creen objetos de forma mas dinamica.

"use strict"
const product = {
  title: 'iPhone',
  ref: '11 Pro',
  aviable: true,
  precio: 600,
};

function Product(title, ref, price) {
  this.title = title;
  this.ref = ref;
  this.price = price;
  this.aviable = true;
}

const product_2 = new Product('Monitor', 'LG Flex', 780);
const product_3 = new Product('Television', 'QR-52012', 650);

console.log(product_2);
console.log(product_3);
console.log(product);
