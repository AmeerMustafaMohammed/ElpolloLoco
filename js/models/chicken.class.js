class Chicken extends MovableObject {

    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png')
        this.x = 300 + Math.random() * 400;
        this.y = 350;
        this.height = 100;
        this.width = 100;
    }
}