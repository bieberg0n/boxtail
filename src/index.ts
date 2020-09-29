import {GuaGame, GuaScene, log} from './guagame'
import SceneMain from './scene'

const main = async function() {
    let imgs = {
        'people': 'img/people.png'
    }

    let game = new GuaGame(30, 800,600 , true)
    await game.loadImg(imgs)

    let scene = new SceneMain(game)
    game.runWithScene(scene)
}

main()
