// var's
let images = []
let foundItems = []

// main
initImages()
images.forEach(image => {
    const main = document.getElementById('searchField')
    let img = document.createElement('img')
    img.alt = image.name
    img.src = image.src
    img.classList.add('si')
    let bottomOfset = `${getRandomInt(30)}rem`
    let leftOfset = `${getRandomInt(60)}rem`
    img.style.bottom = bottomOfset
    img.style.left = leftOfset
    img.onclick = () => {
        addToFoundItems(image)
        displayInFooter()
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
function displayInFooter() {
    let foundItemsSection = document.getElementById('foundItems')
    console.log(foundItemsSection)
    foundItemsSection.innerHTML = null
    foundItems.forEach(item => {
        let img = document.createElement('img')
        img.alt = item.name
        img.src = item.src
        foundItemsSection.append(img)
    });
}

// test