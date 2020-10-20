import {GuaGame, GuaScene, Sprite} from "../../guagame";

enum Direction {
    down = 'down',
    up = 'up',
    left = 'left',
    right = 'right',
}

export default class People extends Sprite {
    scene: GuaScene
    direction: Direction

    constructor (game: GuaGame, scene: GuaScene) {
        super(game, 'people')

        this.game = game
        this.scene = scene
        this.w = 27
        this.h = 42
        this.x = 150
        this.y = 400
        this.speed = 15
        this.direction = Direction.down

        game.bindKeyPress('a', () => {
            this.direction = Direction.left
            this.moveLeftInside()
        })
        game.bindKeyPress('d', () => {
            this.direction = Direction.right
            this.moveRightInside()
        })
        game.bindKeyPress('w', () => {
            this.direction = Direction.up
            this.moveUpInside()
        })
        game.bindKeyPress('s', () => {
            this.direction = Direction.down
            this.moveDownInside()
        })
    }

    mapDirectPos = () => {
        let direction = this.direction
        if (direction === Direction.down) {
            return [3, 4]
        } else if (direction === Direction.left) {
            return [3, 53]
        } else if (direction === Direction.right) {
            return [3, 101]
        } else {
            return [3, 149]
        }
    }

    draw = () => {
        // this.game.drawImage(this)
        let [x, y] = this.mapDirectPos()
        this.game.drawImagePart(this, x, y, this.w, this.h)
    }
}
