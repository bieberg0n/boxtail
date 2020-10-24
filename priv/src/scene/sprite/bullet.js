class Bullet extends Sprite {
    constructor (game) {
        super(game, 'bullet')

        this.speed = 50
    }

    move = () => {
        this.moveUp()
    }
}
