const timerElement = document.getElementById("timer");
let seconds = Number(timerElement.textContent);
const timer = setInterval(function() {
    seconds--;
    timerElement.textContent = seconds;
    if (seconds <= 0) {
        clearInterval(timer);
        alert("Вы победили в конкурсе!");
    }
}, 1000);