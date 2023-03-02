const containerEl = document.querySelector(".container");

const careers = ["Engineer", "Web Developer", "YouTuber", "FreeLancer"];
let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    containerEl.innerHTML = `<h1>Hi, I'm ${careers[careerIndex].slice(0, 1) === "E" ? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}!</h1>`

    if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0
    }

    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 400)
}
