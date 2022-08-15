up = document.getElementById('up');
up.addEventListener('click', (e) => {
    racketRight = Number(document.getElementById('racketRight2').value);
    (racketRight == 10)? racketRight = racketRight : racketRight = racketRight - 10;
    racketRight1.style.top = `${racketRight}%`;
    document.getElementById('racketRight2').value = racketRight;
    racketRight_writes();
    racketRight_reads();
})

down = document.getElementById('down');
down.addEventListener('click', (e) => {
    racketRight = Number(document.getElementById('racketRight2').value);
    (racketRight == 90)? racketRight = racketRight : racketRight = racketRight + 10;
    racketRight1.style.top = `${racketRight}%`;
    document.getElementById('racketRight2').value = racketRight;
    racketRight_writes();
    racketRight_reads();
})