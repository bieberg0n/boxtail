import {GuaScene, Sprite, log} from '../guagame'
import People from './sprite/people'
import {Boxtail} from "../index";

export class SceneMain extends GuaScene {
    game: Boxtail
    gamestart: boolean
    gameover: boolean
    sprites: Sprite[]

    constructor(game: Boxtail) {
        super(game)
        this.game = game
        this.gamestart = false
        this.gameover = false
        this.sprites = [
            new People(this.game, this)
        ]
    }


    drawBackground = () => {
        let ctx = this.game.context
        ctx.fillStyle = '#ebdcc7'
        // ctx.fillStyle = 'white'
        // log('#ebdcc7')

        // ctx.fill();
        ctx.fillRect(0,0,this.game.width,this.game.height);
    }

    draw = () => {
        this.drawBackground()
        this.sprites.forEach(s => s.draw())

        // let ctx = this.game.context
        // ctx.font = "30px anti-serif"
        // ctx.fillStyle = '#000'

    }

    update = () => {}
}
