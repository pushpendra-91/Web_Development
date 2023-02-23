const monthEle = document.querySelector(".date h1");
const fullDateEle = document.querySelector(".date p");
const daysEle = document.querySelector(".days");

const monthIndx = new Date().getMonth();
const firstDay = new Date(new Date().getFullYear(), monthIndx, 1).getDay();
const lastDay = new Date(new Date().getFullYear(), monthIndx + 1, 0).getDate();


// console.log(firstDay);
// console.log(lastDay);

const months = [
    "January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"
];

// console.log(months[monthIndx]);

monthEle.innerText = months[monthIndx];
fullDateEle.innerText = new Date().toDateString();

let days = "";

for (let i = firstDay; i < 6; i++) {
    days += `<div class = "empty"></div>`
}

for (let i = 1; i <= lastDay; i++) {
    if ((i === new Date().getDate())) {
        days += `<div class = "today">${i}</div>`
    } else {
        days += `<div>${i}</div>`
    }
}

daysEle.innerHTML = days;

