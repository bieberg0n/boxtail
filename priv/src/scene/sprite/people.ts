import {Boxtail, Direction} from '../../index'
import {Sprite} from "../../guagame";
import {SceneMain} from '../index'

export default class People extends Sprite {
    game: Boxtail
    scene: SceneMain
    direction: Direction

    constructor (game: Boxtail, scene: SceneMain) {
        super(game, 'people')

        this.game = game
        this.scene = scene
        this.w = 27
        this.h = 42
        this.x = 150
        this.y = 400
        this.speed = 15
        this.direction = Direction.down

        game.bindKeyEvent({
            'a': 'left',
            'd': 'right',
            'w': 'up',
            's': 'down',
        })
    }

    mapDirectPos = (direction: Direction) => {
        // let direction = this.direction
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
        for (let p of this.game.peoples) {
            // let me = peoples[0]
            this.x = p.x
            this.y = p.y
            // this.direction = p.direction
            let [x, y] = this.mapDirectPos(p.direction)
            this.game.drawImagePart(this, x, y, this.w, this.h)
            this.game.drawText(p.name, this.x, this.y)
        }
    }
}
