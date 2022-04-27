class World {


    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ]


    clouds = [
        new Cloud(),

    ]
    ctx;
    canvas;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d')
        this.draw();
        this.canvas = canvas;

    }


    draw() {
        // Clearing canvas

        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Canvas Funktion From Google
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height)


        this.clouds.forEach(c => {
            this.ctx.drawImage(c.img, c.x, c.y, c.width, c.height)
        })


        this.enemies.forEach(e => {
            this.ctx.drawImage(e.img, e.x, e.y, e.width, e.height)
        })

        // From Google Is like SetTimeInterval()

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        })
    }
}