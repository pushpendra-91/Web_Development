const hourE1 = document.querySelector(".hour");
const minuteE1 = document.querySelector(".minute");
const secondE1 = document.querySelector(".seconds");

// console.log(hourE1);

function updateClock() {
    const curr_date = new Date();
    // setTimeout(updateClock, 1000);
    // console.log(curr_date);
    const hour = curr_date.getHours();
    const minute = curr_date.getMinutes();
    const sec = curr_date.getSeconds();

    //change hour to degree
    const hour_degree = (hour / 12) * 360;
    hourE1.style.transform = `rotate(${hour_degree}deg)`;

    //change minute to degree
    const minute_degree = (minute / 60) * 360;
    minuteE1.style.transform = `rotate(${minute_degree}deg)`;

    //change seconds to degree
    const sec_degree = (sec / 60) * 360;
    secondE1.style.transform = `rotate(${sec_degree}deg)`;
}

// updateClock();
setInterval(updateClock, 1000);