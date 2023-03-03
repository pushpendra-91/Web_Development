const bars = document.querySelector(".fa-bars")
const sidebar = document.querySelector(".sidebar")
const closebtn = document.querySelector(".fa-times");

bars.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar")
})

closebtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar")
})