const starsE1 = document.querySelectorAll(".fa-star");

const emojiE1 = document.querySelectorAll(".fa-regular");

const colors = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0);

starsE1.forEach((starsE1, index) => {
    starsE1.addEventListener("click", () => {
        updateRating(index)
    })
})

function updateRating(index) {
    starsE1.forEach((starsE1, idx) => {
        if (idx < index + 1) {
            starsE1.classList.add("active");
        } else {
            starsE1.classList.remove("active");
        }
    })


    emojiE1.forEach(emojiE1 => {
        emojiE1.style.transform = `translate(-${index * 50}px)`
        emojiE1.style.color = colors[index];
    })
}