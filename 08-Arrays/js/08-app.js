//Destructuring de objetos

const numeros = [10, 20, 30, 40, 50]

//Podemos asignar el nombre. Ya que su valor esta definido por la posicion o index.
const [ primero, , , cuarto ] = numeros
console.log(primero);
console.log(cuarto);

//Crear Array de elementos en arreglo propio. (Agrupar los elementos que no fueron parte del destructuring).
const [uno, dos, ...grupo] = numeros
console.log(grupo);