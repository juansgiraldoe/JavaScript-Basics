//.concat

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses_2 = ['Agosto', 'Septiembre']
const meses_3 = ['Octubre', 'Noviembre', 'Diciembre']

// .concat
const resultado = meses.concat(meses_2, meses_3, 'Otro mes')
console.table(resultado);

//Spread operator
const res_2 = [...meses, ...meses_2, ...meses_3, 'Otro mes']
console.table(res_2)

//El orden es importante, peude alterar el orden del array.
//Podemos agregar strings en cualquiera de los metodos, debemos asegurarnos de que no sea un arreglo.