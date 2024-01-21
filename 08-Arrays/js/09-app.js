//forEach

const cart = [
  {nombre: 'Celular', precio: 600,},
  {nombre: 'Mouse', precio: 50,},
  {nombre: 'Laptop', precio: 800,},
  {nombre: 'Teclado', precio: 300,},
  {nombre: 'Crgador', precio: 100,},
];

//for itera sobre la cantidad que demos de elementos en un arreglo.
for (let i = 0; i < cart.length; i++) {
  console.log(cart[i].nombre);
}

//forEach itera sobre el total de elementos.
cart.forEach( function (item) {
  console.log(`El precio de ${item.nombre} es de ${item.precio}`);
})