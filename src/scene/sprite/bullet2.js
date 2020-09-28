class Bullet2 extends Sprite {
    constructor (game) {
        super(game, 'bullet2')

        this.speed = 10
    }

    move = () => {
        this.moveDown()
    }

}
