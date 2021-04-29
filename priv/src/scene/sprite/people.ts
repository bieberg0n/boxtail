import {Boxtail, Direction} from '../../index'
import {log, Sprite} from "../../guagame";
import {SceneMain} from '../index'

export default class People extends Sprite {
    game: Boxtail
    scene: SceneMain
    direction: Direction
    fpsTime: number
    statusNum: number

    constructor (game: Boxtail, scene: SceneMain) {
        super(game, game.role)

        this.game = game
        this.scene = scene
        this.w = 27
        this.h = 46
        this.direction = Direction.down
        this.fpsTime = this.game.stausTime
        this.statusNum = 0

        game.bindKeyEvent({
            a: Direction.left,
            d: Direction.right,
            w: Direction.up,
            s: Direction.down,
        })
    }

    updateStatusNum = () => {
        if (this.game.stausTime - this.fpsTime > 10) {
            this.statusNum = (this.statusNum + 1) % 4
            this.fpsTime = this.game.stausTime
        }
    }

    mapDirectPos = (direction: Direction) => {
        let xs = [3, 30, 57, 84]
        let x = xs[this.statusNum]
        if (direction === Direction.down) {
            return [x, 2]
        } else if (direction === Direction.left) {
            return [x, 50]
        } else if (direction === Direction.right) {
            return [x, 98]
        } else {
            return [x, 146]
        }
    }

    draw = () => {
        let peoples = this.game.peoples.sort((p1, p2) => p1.y - p2.y)
        this.updateStatusNum()
        for (let p of peoples) {
            let [x, y] = this.mapDirectPos(p.direction)
            this.game.drawImagePart(this.game.images[p.role], x, y, this.w, this.h, p.x, p.y)
            this.game.drawText(p.name, p.x, p.y - 10)
        }
    }
}
