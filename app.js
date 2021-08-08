let getTime = document.getElementById("time");
let isTwelveHour = true;
let amPm = " AM";

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    let hours = "12";
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    getTime.innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () {
        startTime();
    }, 500);
}

startTime();

