const counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

let clicks = 0;
let isSmall = false;

cookie.onclick = function() {
    clicks++;
    counter.textContent = clicks;

    if (isSmall) {
        cookie.width = 200;
        cookie.height = 200;
    } else {
        cookie.width = 180;
        cookie.height = 180;
    }

    isSmall = !isSmall;
};