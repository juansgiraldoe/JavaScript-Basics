//Agregar elementos a un Array
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'];

//Aunque sea const los elementos en el arreglo si se pueden modificar.
months[0] = 'Diciembre'
months[8] = 'Septiembre'

console.table(months)