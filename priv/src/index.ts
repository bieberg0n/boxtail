import {GuaGame, log, e} from './guagame'
import {SceneMain} from './scene'
import GuaScene from "./guagame/gua_scene";

export enum Direction {
    down = 'down',
    up = 'up',
    left = 'left',
    right = 'right',
}

interface People {
    name: string
    role: string
    status: string[]
    x: number
    y: number
    direction: Direction
}

type strMap = {[key: string]: string}

export class Boxtail extends GuaGame {
    ws: WebSocket
    name: string
    role: string
    peoples: People[]
    keyEventMap: strMap
    events: Set<string>

    constructor(fps: number, width=400, height=300, debug=false) {
        super(fps, width, height, debug)

        this.ws = this.initWs()
        this.name = 'Nico'
        this.role = 'nico'
        this.peoples = []
        this.keyEventMap = {}
        this.events = new Set()

        e('#id-input-name')!.addEventListener('input', (event) => {
            let input = event.target as HTMLInputElement
            this.name = input.value
            this.pushName()
        })
        e('#id-select-role')!.addEventListener('change', (event) => {
            let select = event.target as HTMLSelectElement
            this.role = select.value
            this.pushRole()
        })
    }

    initWs = () => {
        const ws = new WebSocket('ws://192.168.1.4:8080/websocket')
        ws.onopen = (_event) => {
            this.pushName()
        }
        ws.addEventListener('message', (event) => {
            this.peoples = JSON.parse(event.data)
        })

        return ws
    }

    push = (data: {[key: string]: any}) => {
        this.ws.send(JSON.stringify(data))
    }

    pushName = () => {
        this.push({name: this.name})
    }

    pushRole = () => {
        this.push({role: this.role})
    }

    pushEvents = () => {
        let data = {events: Array.from(this.events)}
        this.push(data)
    }

    bindKeyEvent = (map: strMap) => {
        this.keyEventMap = map
    }

    updateKeydown = (key: string) => {
        if (this.keydown[key]) {
            return
        }

        this.keydown[key] = true
        let e = this.keyEventMap[key]
        if (e) {
            this.events.add(e)
        }
        this.pushEvents()
    }

    updateKeyup = (key: string) => {
        this.keydown[key] = false
        let e = this.keyEventMap[key]
        if (e) {
            this.events.delete(e)
        }
        this.pushEvents()
    }

    runloop = () => {
        // update
        this.update()
        // clear
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        // draw
        this.draw()
        // next run loop
        // setTimeout(this.runloop, 1000/this.fps)
    }

    runWithScene(scene: GuaScene) {
        window.addEventListener('keydown', event => this.updateKeydown(event.key))
        window.addEventListener('keyup', event => this.updateKeyup(event.key))

        this.scene = scene
        // 开始运行程序
        setInterval(this.runloop, 1000/this.fps)
    }

    drawImagePart(img: HTMLImageElement, imgX: number, imgY: number, width: number, height: number, x: number, y: number) {
        // Image, image左上角x, image左上角y，image绘制宽度, image绘制高度, 绘到canvas的位置x, y, 绘制到canvas的宽高
        this.context.drawImage(img, imgX, imgY, width, height, x, y, width, height)
    }

    drawText = (text:string, x: number, y: number) => {
        let ctx = this.context
        ctx.fillStyle = '#000'
        ctx.font = '20px anti-serif'
        ctx.fillText(text, x, y)
    }
}

const main = async function() {
    let imgs = {
        nico: 'img/nico.png',
        miku: 'img/miku.png',
        minalinsky: 'img/minalinsky.png',
        bilibili: 'img/bilibili.png',
    }

    let game = new Boxtail(30, 800,600 , true)
    await game.loadImg(imgs)

    let scene = new SceneMain(game)
    game.runWithScene(scene)
}

main()
