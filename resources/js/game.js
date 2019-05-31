// var's
let images = []

// main
initImages()
images.forEach(im => {
    const main = document.getElementById('searchField')
    let img = document.createElement('img')
    img.alt = im.name
    img.src = im.src

    main.append(img)
});

// function's
function getRandomInt(max, min = 0) {
    const d = max - min
    const r = Math.floor(d * Math.random())
    const n = min + r;
    console.log(n)
    return n
}
function initImages() {
    images.push(initImage('./resources/img/obj/bubble-navy-blue-th.png', 'navyBlue'))
    images.push(initImage('./resources/img/obj/bubble-red-th.png', 'red'))
    images.push(initImage('./resources/img/obj/bubble-sky-blue-th.png', 'skyBlue'))
}
function initImage(src, name) {
    let i = {
        name : name,
        src : src
    }
    return i
}

// test