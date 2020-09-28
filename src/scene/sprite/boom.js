class Particle extends Sprite {
    constructor(game, imgName, x, y) {
        super(game, imgName)

        this.x = x
        this.y = y
        this.speedX = randomRange(1, 10)
        this.speedY = randomRange(1, 10)
        this.mX = randomRange(0, 1) === 0 ? this.moveLeft : this.moveRight
        this.mY = randomRange(0, 1) === 0 ? this.moveUp : this.moveDown
        this.alive = true
    }

    moveUp = () => {
        this.moveY(this.y - this.speedY)
    }

    moveDown = () => {
        this.moveY(this.y + this.speedY)
    }

    moveLeft = () => {
        this.moveX(this.x - this.speedX)
    }

    moveRight = () => {
        this.moveX(this.x + this.speedX)
    }

    move = () => {
        if (this.speedX <= 0 || this.speedY <= 0) {
            this.alive = false
            return
        }

        this.mX()
        this.mY()
        this.speedX -= 2
        this.speedY -= 2
    }
}

class Boom extends Sprite {
    constructor(game, imgName, x, y) {
        super(game, imgName)

        this.ps = []
        for (let i = 0; i < 20; i++) {
            this.ps.push(new Particle(game, imgName, x, y))
        }
    }

    move = () => {
        this.ps.forEach(p => p.move())
    }

    draw = () => {
        this.ps.forEach(p => p.draw())
    }

    alive = () => {
        return this.ps.some(p => p.alive)
    }
}
