function ballVariables_makes(){
    ballVariables = ballX + " " + distanceX + " " + directionX + " " + ballY + " " + distanceY + " " + directionY;
}

function ballVariables_dissects(){
    ballVariables = document.getElementById('ballVariables').value;
    const gameVariables = ballVariables.split(" ");
    ballX = Number(gameVariables[0]);
    distanceX = Number(gameVariables[1]);
    directionX = Number(gameVariables[2]);
    ballY = Number(gameVariables[3]);
    distanceY = Number(gameVariables[4]);
    directionY = Number(gameVariables[5]);
}