//Template Strings.

const item = 'Escritorio'
const precio = '30 USD'

console.log(item.concat(precio)) //Agega el parametro que pasemos.
console.log(item.concat('en descuento.'))
console.log(item + ' ' + 'con un precio de ' + ' ' + precio)
console.log(`El precio del ${item} tiene un precio de ${precio}`) //Best practice.