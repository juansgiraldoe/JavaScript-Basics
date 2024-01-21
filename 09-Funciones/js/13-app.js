const player = {
  cancion: '',
  reproducir: id => console.log(`Reproduciendo cancion ${id}.`),
  pausar: () => console.log(`Pausando.`),
  delete: () => console.log(`Borrando cancion.`),
  
  set newSong(song){
    this.cancion = song
    console.log(`Añadiendo cancion`);
  },
  get getSong(){
    console.log(`${this.cancion}`);
  }
}
player.newSong = 'Cancion nueva...'
player.getSong;

player.reproducir(30);
player.pausar();
player.delete();