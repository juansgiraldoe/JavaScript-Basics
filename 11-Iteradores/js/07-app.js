//for of
//Es una version mas simplificada de un for loop normal.

const pendientes = ['Tarea', 'Comida', 'Proeycto', 'Aprendizaje']

for (let pendiente of pendientes) {
  console.log(pendiente);
}

const cart = [
  {nombre: 'Celular', precio: 600,},
  {nombre: 'Mouse', precio: 50,},
  {nombre: 'Laptop', precio: 800,},
  {nombre: 'Teclado', precio: 300,},
  {nombre: 'Crgador', precio: 100,},
];

for (const producto of cart) {
  console.log(producto.nombre);
  console.log(producto);
}