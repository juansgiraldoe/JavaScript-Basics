//Metodos de propiedad. (Funciones en objetos)

const player = {
  reproducir: function (id) {
    console.log(`Reproduciendo cancion ${id}.`);
  },
  pausar: function () {
    console.log(`Pausando.`);
  },
  delete: function () {
    console.log(`Borrando cancion.`);
  }
}
player.reproducir(30);
player.pausar();
player.delete();