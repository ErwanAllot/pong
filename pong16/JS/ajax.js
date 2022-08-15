function ballBook_writes() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "PHP/ballBook_writes.php?ballVariables=" + ballVariables, true);
    xmlhttp.send();
}

function ballBook_reads() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('ballVariables').value = this.responseText;
        }
    };
    xmlhttp.open("POST", "PHP/ballBook_reads.php", true);
    xmlhttp.send();
}

function racketLeft_writes() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "PHP/racketLeft_writes.php?racketLeft=" + racketLeft, true);
    xmlhttp.send();
}

function racketLeft_reads() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('racketLeft2').value = this.responseText;
        }
    };
    xmlhttp.open("POST", "PHP/racketLeft_reads.php", true);
    xmlhttp.send();
}

function racketRight_writes() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "PHP/racketRight_writes.php?racketRight=" + racketRight, true);
    xmlhttp.send();
}

function racketRight_reads() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('racketRight2').value = this.responseText;
        }
    };
    xmlhttp.open("POST", "PHP/racketRight_reads.php", true);
    xmlhttp.send();
}

function scoreLeft_writes() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "PHP/scoreLeft_writes.php?scoreLeft=" + scoreLeft, true);
    xmlhttp.send();
}

function scoreLeft_reads() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('scoreLeft').innerText = this.responseText;
        }
    };
    xmlhttp.open("POST", "PHP/scoreLeft_reads.php", true);
    xmlhttp.send();
}

function scoreRight_writes() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "PHP/scoreRight_writes.php?scoreRight=" + scoreRight, true);
    xmlhttp.send();
}

function scoreRight_reads() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('scoreRight').innerText  = this.responseText;
        }
    };
    xmlhttp.open("POST", "PHP/scoreRight_reads.php", true);
    xmlhttp.send();
}