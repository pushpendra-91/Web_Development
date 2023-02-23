const textareaE1 = document.getElementById("textarea");
const totalCounterE1 = document.getElementById("total-counter");
const remainCounterE1 = document.getElementById("remaining-counter");
textareaE1.addEventListener("keyup", () => {
    // console.log("key pressed")
    updateCounter();
})

updateCounter();

function updateCounter() {
    totalCounterE1.innerText = textareaE1.value.length;
    remainCounterE1.innerText = textareaE1.getAttribute("maxLength") - textareaE1.value.length;
}
