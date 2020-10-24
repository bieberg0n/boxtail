class Enemy extends Sprite {
    constructor (game, scene) {
        super(game, 'enemy')

        this.game = game
        this.scene = scene
        this.x = randomRange(0, this.game.width - this.w)
        this.y = -50
        this.toY = randomRange(0, this.game.height / 2)
        this.speed = 2
        this.bullets = []
        this.alive = true
        this.setNewRandomMove()
    }

    setNewRandomMove = () => {
        this.toX = randomRange(Math.max(0, this.x - 50), Math.min(this.x + 50, this.game.width-this.w))
        this.toLeft = this.toX < this.x
    }

    break = () => {
        this.alive = false
        let boom = new Boom(this.game, 'bullet', this.x + this.w/2, this.y+this.h/2)
        this.scene.booms.push(boom)
    }

    moveBullets = () => {
        // 移动敌方子弹 命中我机结束战斗 出界清理
        let bullets = []
        for (let b of this.bullets) {
            b.move()
            if (!b.isOut()) {
                if (b.collide(this.scene.aircraft)) {
                    this.scene.toEnd()
                }
                bullets.push(b)
            }
        }
        this.bullets = bullets

        // 未到指定位置不发射
        if (!this.alive || this.y < this.toY) {
            return
        }

        // 满足发射情况
        let bLen = this.bullets.length
        if (bLen === 0 || this.bullets[bLen-1].y > 350) {
            let b = new Bullet2(this.game)
            b.x = this.x + this.w / 2
            b.y = this.y + this.h / 2
            this.bullets.push(b)
        }
    }

    move = () => {
        this.moveBullets()

        if (!this.alive) {
            return
        }

        // 下降然后随机左右运动
        if (this.y < this.toY) {
            this.moveDown()

        } else if (this.x === this.toX) {
          this.setNewRandomMove()

        } else if (this.x > this.toX) {
            if (this.toLeft) {
                this.moveLeftInside()
            } else {
                this.setNewRandomMove()
            }

        } else if (this.x < this.toX) {
            if (this.toLeft) {
                this.setNewRandomMove()
            } else {
                this.moveRightInside()
            }
        }

    }

    draw = () => {
        this.game.drawImages(this.bullets)

        if (this.alive) {
            this.game.drawImage(this)
        }
    }
}
