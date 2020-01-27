/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
    /* el sprite contiene la ruta de la imagen
     */
    sprite: 'imagenes/auto_rojo_abajo.png',
    x: 130,
    y: 160,
    ancho: 15,
    alto: 30,
    velocidad: 10,
    vidas: 5,
    quitarVidas: function(cantVidas) {
        this.vidas -= cantVidas;
    },
    mover: function(posX, posY, pSprite) {
        this.x += posX;
        this.y += posY;
    },
    deCostado: function() {
        this.ancho = 30;
        this.alto = 15;
    },
    parado: function() {
        this.ancho = 15
        this.alto = 30;
    }

}