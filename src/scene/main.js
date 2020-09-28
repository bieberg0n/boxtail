class SceneMain extends GuaScene {
    constructor(game) {
        super(game)

        this.gamestart = false
        this.gameover = false

        game.bindKeyPress(' ', this.attack)
    }

    sprites = () => {
        return []
    }

    toEnd = () => {
        // this.aircraft.break()
        this.gameover = true
        //
        // let ts = ['a', 's', 'w', 'd']
        // ts.forEach(t => this.game.unBindKey(t))
        //
        // let scene = new SceneMain(this.game)
        // this.game.bindKeyDown('r', () => this.game.replaceScene(scene))
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
        // this.sprites().forEach(s => s.draw())

        // let ctx = this.game.context
        // ctx.font = "30px anti-serif"
        // ctx.fillStyle = '#000'

    }

    update = () => {}
}
