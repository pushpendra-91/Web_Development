const menuE1 = document.querySelector(".menu");
const menuTextE1 = document.querySelector(".menu p");
const socialListsE1 = document.querySelector(".social-lists");
// const arrowIconE1 = document.querySelector(".menu .fas");
const liE1 = document.querySelectorAll(".social-lists li");

console.log(liE1);
menuE1.addEventListener("click", () => {
    socialListsE1.classList.toggle("hide");
    menuE1.classList.toggle("rotate");
});

liE1.forEach(liE1 => {
    liE1.addEventListener("click", () => {
        menuTextE1.innerHTML = liE1.innerHTML;
        socialListsE1.classList.add("hide");
        menuE1.classList.toggle("rotate");
    })
})