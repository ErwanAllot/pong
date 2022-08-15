var ballX = 50;
var distanceX = Math.floor(Math.random() * 10) + 1;
var directionX = Math.floor(Math.random() * 2);
    if(directionX == 0){directionX = -1};

var ballY = 50;
var distanceY = Math.floor(Math.random() * 10) + 1;
var directionY = Math.floor(Math.random() * 2);
    if(directionY == 0){directionY = -1};

var racketRight = 50; var racketLeft = 50;
var scoreRight = 0; var scoreLeft = 0;

function startGameSettings(){
    ballX = 50;
    distanceX = Math.floor(Math.random() * 10) + 1;
    directionX = Math.floor(Math.random() * 2);
        if(directionX == 0){directionX = -1};
    
    ballY = 50;
    distanceY = Math.floor(Math.random() * 10) + 1;
    directionY = Math.floor(Math.random() * 2);
        if(directionY == 0){directionY = -1};
}