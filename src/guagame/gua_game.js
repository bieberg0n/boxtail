class GuaGame {
    constructor(fps, width=400, height=300, debug=false) {
        window.fps = fps
        this.width = width
        this.height = height
        this.debug = debug

        this.images = {}
        this.scene = null

        this.keyDownActions = {}
        this.keyPressActions = {}
        this.keydown = {}

        this.canvas = e('#id-canvas')
        this.context = this.canvas.getContext('2d')

        if (debug) {
            e('#id-input-speed').addEventListener('input', function (event) {
                let input = event.target
                window.fps = Number(input.value)
            })
        }
    }

    // 立即触发
    bindKeyDown = (key, callback) => {
        this.keyDownActions[key] = callback
    }

    unBindKey = (key) => {
        this.keyDownActions[key] = undefined
        this.keyPressActions[key] = undefined
    }

    // update的时候触发 用于按住的情况
    bindKeyPress = (key, callback) => {
        this.keyPressActions[key] = callback
    }

    // 载入所有图片
    loadImg = async (images) => {
        let loads = []
        for (let name in images) {
            let path = images[name]
            let img = imageFromPath(path)
            this.images[name] = img
            loads.push(new Promise(resolve => img.onload=resolve))
        }
        await Promise.all(loads)
    }

    drawImage(img) {
        this.context.drawImage(img.image, img.x, img.y)
    }

    drawImages(imgs) {
        imgs.forEach(img => this.drawImage(img))
    }

    // update
    update() {
        this.scene.update()
    }

    // draw
    draw() {
        this.scene.draw()
    }

    runloop = () => {
        // events
        for (let key in this.keyPressActions) {
            if(this.keydown[key] && this.keyPressActions[key]) {
                // 如果按键被按下, 调用注册的 action
                this.keyPressActions[key]()
            }
        }
        // update
        this.update()
        // clear
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        // draw
        this.draw()
        // next run loop
        setTimeout(this.runloop, 1000/window.fps)
    }

    runWithScene(scene) {
        window.addEventListener('keydown', event => {
            let k = event.key
            if (this.keyDownActions[k]) {
                this.keyDownActions[k]()
            }
            this.keydown[k] = true
        })

        window.addEventListener('keyup', event => this.keydown[event.key] = false)

        this.scene = scene
        // 开始运行程序
        setTimeout(this.runloop, 1000/window.fps)
    }

    replaceScene(scene) {
        this.scene = scene
    }
}
