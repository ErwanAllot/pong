function begining(){
    racketLeftArea.style.backgroundColor = 'green';
    racketRightArea.style.backgroundColor = 'green';
    ballX = ballX + (directionX * distanceX);
    ballY = ballY + (directionY * distanceY);
    if (ballY < 0){ballY = 0;directionY = -1 * directionY;}
    if (ballY > 100 ){ballY = 100;directionY = -1 * directionY;}
}

function finish(){
    if(ballX < 0){
        if(ballY < racketLeft - 10 || ballY > racketLeft + 10 ){
            racketLeftArea.style.backgroundColor = 'red';
            scoreRight = scoreRight + 1;
            scoreRight_writes();
            scoreRight_reads();
            startGameSettings();
        }
        else{ballX = 0;directionX = -1 * directionX;}
    }
    if(ballX > 100){
        if(ballY < racketRight - 10 || ballY > racketRight + 10 ){
            racketRightArea.style.backgroundColor = 'red';
            scoreLeft = scoreLeft + 1;
            scoreLeft_writes();
            scoreLeft_reads();
            startGameSettings();
        }
        else{ballX = 100;directionX = -1 * directionX;}
    }
}

function result(){
    ball.style.left = `${ballX}%`;
    ball.style.top = `${ballY}%`;   
}