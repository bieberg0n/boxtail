import {e, log} from './guagame/utils'

const main = function() {
    let imgs = {
    }

    // let game = new GuaGame(30, 800,600 , true)
    // await game.loadImg(imgs)
    //
    // let scene = new SceneMain(game)
    // game.runWithScene(scene)
    let canvas = e('canvas') as HTMLCanvasElement
    let ctx = canvas.getContext('2d')!
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, 800, 600)
}

main()
