export const e = function (sel: string) {
    return document.querySelector(sel)
}

export const log = function (...args: any[]) {
    console.log(...args)
}

const imageFromPath = function (path: string) {
    const img = new Image()
    img.src = path
    return img
}

const aInb = function (x: number, x1: number, x2: number) {
    return x >= x1 && x <= x2
}

// const collide = function(a, b) {
//     return (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w))
//         && (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h))
// }

const randomRange = function (min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const rangeLimit = function (x: number, min: number, max: number) {
    return Math.max(Math.min(max, x), min)
}
