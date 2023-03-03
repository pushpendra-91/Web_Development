const kits = ["crash", "kick", "snare", "tom"]

const containerEl = document.querySelector(".container");

kits.forEach(kit => {
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn")
    btnEl.innerText = kit
    btnEl.style.backgroundImage = "url(Images/" + kit + ".jpg)"
    containerEl.appendChild(btnEl);
    const audioE1 = document.createElement("audio");
    audioE1.src = "Sounds/" + kit + ".mp3";
    containerEl.appendChild(audioE1);

    btnEl.addEventListener("click", () => {
        audioE1.play();
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === kit.slice(0, 1)) {
            audioE1.play();
            btnEl.style.transform = "scale(.9)";
            setTimeout(() => {
                btnEl.style.transform = "scale(1)"
            }, 100)
        }
    })
})