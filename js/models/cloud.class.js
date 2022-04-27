class Cloud extends MovableObject {
    y = 10;
    height = 300;
    width = 500;
    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/2.png')
        this.x = 100 + Math.random() * 500;

    }
}