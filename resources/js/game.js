// var's
let images = []
let foundItems = []

// main
initImages()
images.forEach(i => {
    const main = document.getElementById('searchField')
    let img = document.createElement('img')
    img.alt = i.name
    img.src = i.src
    img.classList.add('si')
    let bottomOfset = `${getRandomInt(30)}rem`
    let leftOfset = `${getRandomInt(60)}rem`
    img.style.bottom = bottomOfset
    img.style.left = leftOfset
    img.onclick = () => {
        addToFoundItems(i)
    }

    main.append(img)
});

// function's
function getRandomInt(max, min = 0) {
    const d = max - min
    const r = Math.floor(d * Math.random())
    const n = min + r;
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
function addToFoundItems(foundItem) {
    let found = false;
    foundItems.forEach(i => {
        if (foundItem == i) {
            found = true
            return true
        }
    });
    if (!found) {
        foundItems.push(foundItem)
    }
}

// test