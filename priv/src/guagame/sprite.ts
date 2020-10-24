import GuaGame from "./gua_game"
import {collide, rangeLimit} from './utils'

export default class Sprite {
    game: GuaGame
    name: string
    image: HTMLImageElement
    w: number
    h: number
    x: number
    y: number
    speed: number
    fired: boolean
    enableDrag: boolean
    
    constructor (game: GuaGame, name: string) {
        this.game = game
        this.name = name
        this.image = game.images[name] as HTMLImageElement
        this.w = this.image.width
        this.h = this.image.height

        this.x = 0
        this.y = 0
        this.speed = 0

        this.fired = false

        // 拖拽状态
        this.enableDrag = false
    }

    fire = () => {
        this.fired = true
    }

    stop = () => {
        this.fired = false
    }

    hasPoint = (x: number, y: number) => {
        let xIn = x >= this.x && x <= this.x + this.w
        let yIn = y >= this.y && y <= this.y + this.h
        return xIn && yIn
    }

    // 可以被拖动
    canDrag = () => {
        // mouse event
        this.game.canvas.addEventListener('mousedown', event => {
            let x = event.offsetX
            let y = event.offsetY
            // 检查是否点中了 ball
            if (this.hasPoint(x, y)) {
                // 设置拖拽状态
                this.enableDrag = true
            }
        })
        this.game.canvas.addEventListener('mousemove', event => {
            if (this.enableDrag) {
                this.x = event.offsetX
                this.y = event.offsetY
            }
        })
        this.game.canvas.addEventListener('mouseup', () => this.enableDrag = false)
    }

    collide = (b: Sprite) => {
        return collide(this, b)
    }

    move = () => {}

    moveX = (x: number) => {
        this.x = x
    }

    moveY = (y: number) => {
        this.y = y
    }

    moveUp = () => {
        this.moveY(this.y - this.speed)
    }

    moveDown = () => {
        this.moveY(this.y + this.speed)
    }

    moveLeft = () => {
        this.moveX(this.x - this.speed)
    }

    moveRight = () => {
        this.moveX(this.x + this.speed)
    }

    moveXInSide = (x: number) => {
        this.x = rangeLimit(x, 0, this.game.width - this.w)
    }

    moveYInSide = (y: number) => {
        this.y = rangeLimit(y, 0, this.game.height - this.w)
    }

    moveUpInside = () => {
        this.moveYInSide(this.y - this.speed)
    }

    moveDownInside = () => {
        this.moveYInSide(this.y + this.speed)
    }

    moveLeftInside = () => {
        this.moveXInSide(this.x - this.speed)
    }

    moveRightInside = () => {
        this.moveXInSide(this.x + this.speed)
    }

    draw = () => {
        this.game.drawImage(this)
    }

    // 是否出了边界
    isOut = () => {
        return this.x < 0 || this.x > this.game.width || this.y < 0 || this.y > this.game.height
    }
}
