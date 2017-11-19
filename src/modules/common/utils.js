exports.paddingImg = (images, len = 3) => {
    let maxLen = images.length % len === 0 ? parseInt(images.length / len) : parseInt(images.length / len) + 1
    let imgs = []
    images.forEach((img, index) => {
        let idx = parseInt(index / 3)
        if (!Array.isArray(imgs[idx])) {
            imgs[idx] = []
        }
        imgs[idx].push(img)
    })
    if (len - imgs[maxLen - 1].length > 0) {
        imgs[maxLen - 1] = imgs[maxLen - 1].concat(Array.from(new Array(len - imgs[maxLen - 1].length), () => ''))
    }
    return imgs
}
