//Destructuring de objetos anidados.

const product = {
  title: 'iPhone',
  ref: '11 Pro',
  aviable: true,
  price: 600,
  info: {
    med: {
      height: '1 Metro',
      width: '1 Metro'
    },
    pes: '1kg'
  },
};

const { title, ref , aviable, price, info, info: { med: {height} } } = product;

console.log(info);
console.log(height);