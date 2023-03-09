const btn = document.querySelector(".btn")
const video = document.querySelector(".background-video")
const faAw = document.querySelector(".fa");

const preloader = document.querySelector(".preloader")

btn.addEventListener("click", () => {
    if (btn.classList.contains("pause")) {
        btn.classList.remove("pause")
        video.play()
        faAw.classList.add("fa-play")
        faAw.classList.remove("fa-pause")
    } else {
        btn.classList.add("pause");
        video.pause();
        faAw.classList.remove("fa-play")
        faAw.classList.add("fa-pause")
    }

})

window.addEventListener("load", () => {
    preloader.style.zIndex = "-2"
})