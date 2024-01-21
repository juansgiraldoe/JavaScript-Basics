//Mayor o igual, menor o igual y else if.

const  dinero = 500,
      totalPagar = 600,
      tarjeta = false,
      cheque = true;

if ( dinero >=totalPagar ) {
  console.log('Puedes pagar.');
} else if ( tarjeta ){
  console.log('Puedes pagar con tarjeta.');
} else if ( cheque ) {
  console.log('Puedes pagar con cheque.');
} else {
  console.log('Fondos insuficientes.');
}