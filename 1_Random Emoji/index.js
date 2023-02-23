const btnElement = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1");

    data = await response.json();
    //console.log(data);
    for (let i = 0; i < 2000; i++) {
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        });
    }
}

getEmoji();


btnElement.addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * emoji.length);
    // console.log(randomNum);
    btnElement.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode;
})