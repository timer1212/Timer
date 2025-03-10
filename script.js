function startCountdown() {
    let seconds = 60;  
    let timer = setInterval(() => {
        document.getElementById("timer").innerText = seconds;
        if (seconds === 0) clearInterval(timer);
        seconds--;
    }, 1000);
}
