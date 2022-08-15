//======== The Game 
racketRight = Number(document.getElementById('racketRight2').value);
racketRight_writes();
racketLeft = Number(document.getElementById('racketLeft2').value);
racketLeft_writes();

ballVariables_makes();ballBook_writes();ballBook_reads();

// setInterval(start,300);

function start(){

    ballVariables_dissects();

    begining();finish();result();

    ballVariables_makes();ballBook_writes();ballBook_reads();
    
    racketLeft_reads();
    racketRight_reads();
}