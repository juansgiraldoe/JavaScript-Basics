//for in.
//Iterador de objetos.

const moto = {
  motor: `1104 cm`,
  modelo: 2024,
  marca: `Ducati`,
  ref: `Streetfighter`,
}

//Forma 1 de iterar en objetos.
for (const prop in moto) {
  console.log(prop); //Accede a la key del objeto.
  console.log(`${moto[prop]}`); //Acceso a los valores de la key.
}

//Forma 2 de iterar en objetos.
for ( const [ key, value ] of Object.entries(moto) ) {
  console.log( key, value );
}