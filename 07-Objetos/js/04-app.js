//Destructuring de objetos.

const product = {
  title: 'iPhone',
  ref: '11 Pro',
  aviable: true,
  price: 600
};

//Object destructuring. (Crear variables a partir de un objeto, ademas de extraer la puede crear.)
const {title, ref, aviable, price, noExiste} = product;

console.log(title);
console.log(ref);
console.log(aviable);
console.log(price);
conosole.log(noExiste);