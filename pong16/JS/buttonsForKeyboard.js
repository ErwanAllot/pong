document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 38:
            racketRight = Number(document.getElementById('racketRight2').value);
            (racketRight == 10)? racketRight = racketRight : racketRight = racketRight - 10;
            racketRight1.style.top = `${racketRight}%`;
            document.getElementById('racketRight2').value = racketRight;
            racketRight_writes();
            racketRight_reads();
            break;
        case 40:
            racketRight = Number(document.getElementById('racketRight2').value);
            (racketRight == 90)? racketRight = racketRight : racketRight = racketRight + 10;
            racketRight1.style.top = `${racketRight}%`;
            document.getElementById('racketRight2').value = racketRight;
            racketRight_writes();
            racketRight_reads();
            break;
        case 68:
            racketLeft = Number(document.getElementById('racketLeft2').value);
            (racketLeft == 10)? racketLeft = racketLeft : racketLeft = racketLeft - 10;
            racketLeft1.style.top = `${racketLeft}%`;
            document.getElementById('racketLeft2').value = racketLeft;
            racketLeft_writes();
            racketLeft_reads();
            break;
        case 67:
            racketLeft = Number(document.getElementById('racketLeft2').value);
            (racketLeft == 90)? racketLeft = racketLeft : racketLeft = racketLeft + 10;
            racketLeft1.style.top = `${racketLeft}%`;
            document.getElementById('racketLeft2').value = racketLeft;
            racketLeft_writes();
            racketLeft_reads();
            break;
    }
}