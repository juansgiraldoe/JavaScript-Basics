//Eventos con el scroll.

window.addEventListener('scroll', ()=>{
  const scrollPX = window.scrollY;
  console.log(scrollPX); 
})

//Ejemplo practico
window.addEventListener('scroll', ()=>{
  const premium = document.querySelector('.premium');
  const ubicacion = premium.getBoundingClientRect();
  //console.log(ubicacion);
  if ( ubicacion.top < 400) {
    console.log('Premium visible.');
  }
})