class Aircraft extends Sprite {
    constructor (game, scene) {
        super(game, 'aircraft')

        this.game = game
        this.scene = scene
        this.x = 150
        this.y = 400
        this.speed = 15
        this.alive = true

        game.bindKeyPress('a', this.moveLeftInside)
        game.bindKeyPress('d', this.moveRightInside)
        game.bindKeyPress('w', () => this.moveUpInside())
        game.bindKeyPress('s', () => this.moveDownInside())
    }

    break = () => {
        this.alive = false
        let boom = new Boom(this.game, 'bullet2', this.x+this.w/2, this.y+this.h/2)
        this.scene.booms.push(boom)
        this.x = -100
    }

    draw = () => {
        if (this.alive) {
            this.game.drawImage(this)
        }
    }
}
