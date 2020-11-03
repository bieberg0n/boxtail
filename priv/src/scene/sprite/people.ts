import {Boxtail, Direction} from '../../index'
import {log, Sprite} from "../../guagame";
import {SceneMain} from '../index'

export default class People extends Sprite {
    game: Boxtail
    scene: SceneMain
    direction: Direction

    constructor (game: Boxtail, scene: SceneMain) {
        super(game, game.role)

        this.game = game
        this.scene = scene
        this.w = 27
        this.h = 46
        this.direction = Direction.down

        game.bindKeyEvent({
            a: Direction.left,
            d: Direction.right,
            w: Direction.up,
            s: Direction.down,
        })
    }

    mapDirectPos = (direction: Direction) => {
        if (direction === Direction.down) {
            return [3, 2]
        } else if (direction === Direction.left) {
            return [3, 50]
        } else if (direction === Direction.right) {
            return [3, 98]
        } else {
            return [3, 146]
        }
    }

    draw = () => {
        let peoples = this.game.peoples.sort((p1, p2) => p1.y - p2.y)
        for (let p of peoples) {
            // let me = peoples[0]
            // this.x = p.x
            // this.y = p.y
            let [x, y] = this.mapDirectPos(p.direction)
            this.game.drawImagePart(this.game.images[p.role], x, y, this.w, this.h, p.x, p.y)
            this.game.drawText(p.name, p.x, p.y - 10)
        }
    }
}
