//Switch Case

const payment = 'tarjeta'

switch (payment) {
  case 'efectivo':
    console.log(`Puedes pagar con ${payment}`);
    break;
  case 'cheque':
    console.log(`Puedes pagar con ${payment}`);
    break;
  case 'tarjeta':
    cardPay()
    break;

  default:
    console.log('Selecciona un metodo de pago valido.');
    break;
}
function cardPay() {
  console.log(`Pagando con ${payment}.`);
}