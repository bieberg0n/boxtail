class Bg extends Sprite {
    constructor (game) {
        super(game, 'bg')

        this.x = 0
        this.speedY = 3
        this.ys = [
            this.y,
            this.y - this.w,
        ]
        this.fire()
    }

    move = () => {
        if (!this.fired) {
            return
        }

        let a = Math.max(...this.ys)
        let b = Math.min(...this.ys)

        a += this.speedY
        b += this.speedY

        if (a > this.game.height) {
            a = b - this.h
        }

        this.ys = [a, b]
    }

    draw = () => {
        this.ys.forEach(y => this.game.context.drawImage(this.image, 0, y))
    }
}
