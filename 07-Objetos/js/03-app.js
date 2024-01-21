//Agregar o eliminar propiedades en objetos.

const product = {
  title: 'iPhone',
  ref: '11 Pro',
  aviable: true,
  precio: 600
};

//Agregar propiedades.
product.image = 'img.jpg'

//Eliminar propiedades
delete product.aviable;

console.log(product);