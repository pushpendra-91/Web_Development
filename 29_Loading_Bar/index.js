const counterEl = document.querySelector(".counter");

const barEl = document.querySelector(".loading-bar-front");

let indx = 0;
updateNum();

function updateNum() {
    counterEl.innerText = indx + "%"
    barEl.style.width = indx + "%"
    indx++
    if (indx < 101) {
        setTimeout(updateNum, 30)
    }
}