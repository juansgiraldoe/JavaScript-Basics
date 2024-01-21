//Objetos dentro de objetos.

const product = {
  title: 'iPhone',
  ref: '11 Pro',
  aviable: true,
  precio: 600,
  info: {
    med: {
      height: '1 Metro',
      width: '1 Metro'
    },
    pes: '1kg'
  },
};

console.log(product);
console.log(product.info.med.height);
console.log(product.info.med.pes);