const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev")

const imageConatinerEl = document.querySelector(".image-container");

const imgsEl = document.querySelectorAll("img")

let currImg = 1
let timeout;

nextEl.addEventListener("click", () => {
    currImg++;
    clearTimeout(timeout);
    updateImg()
})

prevEl.addEventListener("click", () => {
    currImg--;
    clearTimeout(timeout);
    updateImg();
})

function updateImg() {
    if (currImg > imgsEl.length) {
        currImg = 1;
    } else if (currImg < 1) {
        currImg = imgsEl.length;
    }
    imageConatinerEl.style.transform = `translateX(-${(currImg - 1) * 500}px)`

    timeout = setTimeout(() => {
        currImg++;
        updateImg();
    }, 3000)
}