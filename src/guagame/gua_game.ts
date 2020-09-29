import {e, imageFromPath} from './utils'
import GuaScene from './gua_scene'

interface Img {
    image: HTMLImageElement
    x: number
    y: number
}

export default class GuaGame {
    fps: number
    width: number
    height: number
    debug: boolean
    images: {[key: string]: string | HTMLImageElement}
    scene: GuaScene | null
    keyDownActions: {[key: string]: null | (() => void)}
    keyPressActions: {[key: string]: (() => void) | null}
    keydown: {[key: string]: boolean}
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D

    constructor(fps: number, width=400, height=300, debug=false) {
        this.fps = fps
        this.width = width
        this.height = height
        this.debug = debug

        this.images = {}
        this.scene = null

        this.keyDownActions = {}
        this.keyPressActions = {}
        this.keydown = {}

        this.canvas = e('#id-canvas') as HTMLCanvasElement
        this.context = this.canvas.getContext('2d')!

        if (debug) {
            e('#id-input-speed')!.addEventListener('input', (event: Event) => {
                let input = event.target as HTMLInputElement
                this.fps = Number(input.value)
            })
        }
    }

    // 立即触发
    bindKeyDown = (key: string, callback: () => void) => {
        this.keyDownActions[key] = callback
    }

    unBindKey = (key: string) => {
        this.keyDownActions[key] = null
        this.keyPressActions[key] = null
    }

    // update的时候触发 用于按住的情况
    bindKeyPress = (key: string, callback: () => void) => {
        this.keyPressActions[key] = callback
    }

    // 载入所有图片
    loadImg = async (images: {[key: string]: string | HTMLImageElement}) => {
        let loads = []
        for (let name in images) {
            let path = images[name]
            let img = imageFromPath(path as string)
            this.images[name] = img
            loads.push(new Promise(resolve => img.onload=resolve))
        }
        await Promise.all(loads)
    }

    drawImage(img: Img) {
        this.context.drawImage(img.image, img.x, img.y)
    }

    drawImages(imgs: Img[]) {
        imgs.forEach(img => this.drawImage(img))
    }

    // update
    update() {
        this.scene!.update()
    }

    // draw
    draw() {
        this.scene!.draw()
    }

    runloop = () => {
        // events
        for (let key in this.keyPressActions) {
            if (this.keydown[key] && this.keyPressActions[key]) {
                // 如果按键被按下, 调用注册的 action
                this.keyPressActions[key]!()
            }
        }
        // update
        this.update()
        // clear
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        // draw
        this.draw()
        // next run loop
        setTimeout(this.runloop, 1000/this.fps)
    }

    runWithScene(scene: GuaScene) {
        window.addEventListener('keydown', event => {
            let k = event.key
            if (this.keyDownActions[k]) {
                this.keyDownActions[k]!()
            }
            this.keydown[k] = true
        })

        window.addEventListener('keyup', event => this.keydown[event.key] = false)

        this.scene = scene
        // 开始运行程序
        setTimeout(this.runloop, 1000/this.fps)
    }

    replaceScene(scene: GuaScene) {
        this.scene = scene
    }
}
