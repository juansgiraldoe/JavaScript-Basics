//Problema con los objetos.

//Las variables const que son objetos se pueden cambiar los valores. (Reescribir o eliminar propiedades).

const product = {
  title: 'iPhone',
  ref: '11 Pro',
  aviable: true,
};

product.title = 'Samsung';
product.aviable = false;
product.price = 600;

console.log(product);