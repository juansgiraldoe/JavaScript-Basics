//Parametros en Arrows functions.

const test = function (tech) {
  console.log(`Aprendiendo ${tech}`);
}
test('Javascript');

//Simplificacion, se da por implicito el return y hace los {} opcionales y los () son obligatorios cuando hay mas de 2 parametros.
const test_2 = tech => `Aprendiendo ${tech}`;
console.log(test_2('React Js'));