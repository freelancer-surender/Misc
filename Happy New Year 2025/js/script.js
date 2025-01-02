
function start() {
    startBtn.style.display = "none";
    left.classList.add('open');
    right.classList.add('open');
    setTimeout(() => {
        year.classList.add('show');
    }, 1000);
    setTimeout(() => {
        truck.classList.add('move');
    }, 2000);
    setTimeout(() => {
        missile.classList.add('launch');
    }, 6500);
    setTimeout(() => {
        bomb.classList.add('explode');
    }, 10000);
    setTimeout(() => {
        missile.style.display = "none";
        lastSpan.style.display = "none";
        truck.classList.remove("move");
        truck.classList.add("restart");
        flight.classList.add("move");
    }, 10500);
    setTimeout(() => {
        newSpan.classList.add('drop');
    }, 13500);
    setTimeout(() => {
        audioPlayer.play();
        year.classList.add('color');
        newSpan.classList.add('color');
        message.classList.add('greet');
        fireworks.style.display = "block";
    }, 15500);
}