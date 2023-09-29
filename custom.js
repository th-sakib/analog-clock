// variables
const mHand = document.getElementById('minute');
const hHand = document.getElementById('hour');
const sHand = document.getElementById('second');

setInterval(() => {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    hHand.style.transform = `rotate(${h * 30 + .5 * m + (1 / 120) * s}deg)`;
    mHand.style.transform = `rotate(${m * 6 + (1 / 10) * s}deg)`;
    sHand.style.transform = `rotate(${s * 6}deg)`;
}, 1000);