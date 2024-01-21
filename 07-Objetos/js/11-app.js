//This
//Hace referencia a las keys o valores que hay en el mismo objeto. Se refiere al objeto en si mismo.

const product = {
  title: 'iPhone',
  ref: '11 Pro',
  aviable: true,
  price: 600,
  showInfo: function () {
    console.log(`El producto ${this.title} tiene un precio de ${this.price}`);
  },
};

product.showInfo();