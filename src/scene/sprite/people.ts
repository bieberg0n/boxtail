import {GuaGame, GuaScene, Sprite} from "../../guagame";

export default class People extends Sprite {
    scene: GuaScene
    alive: boolean

    constructor (game: GuaGame, scene: GuaScene) {
        super(game, 'people')

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

    draw = () => {
        if (this.alive) {
            this.game.drawImage(this)
        }
    }
}
