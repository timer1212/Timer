let timer;
function startCountdown() {
    let minutes = document.getElementById("minutes").value || 1; // Default to 1 min
    let seconds = minutes * 60;

    clearInterval(timer); // Clear previous timers

    timer = setInterval(() => {
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;

        // Format time as MM:SS
        document.getElementById("timer").innerText = `${min}:${sec < 10 ? '0' : ''}${sec}`;

        if (seconds === 0) {
            clearInterval(timer);
        } else {
            seconds--;
        }
    }, 1000);
}

