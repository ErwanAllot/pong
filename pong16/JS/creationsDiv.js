//======== Ball-------CREATIONS
game = document.getElementById('game');
const ball = document.createElement('div');
ball.setAttribute('id', 'ball');
ball.style.top = `${ballY}%`;
ball.style.left = `${ballX}%`;
game.appendChild(ball);

//======== Racket Left-------CREATIONS
racketLeftArea = document.getElementById('racketLeftArea');
racketLeft1 = document.createElement('div');
racketLeft1.setAttribute('id', 'racketLeft');
racketLeft1.style.top = '50%';
racketLeftArea.appendChild(racketLeft1);

//======== Racket Right-------CREATIONS
racketRightArea = document.getElementById('racketRightArea');
racketRight1 = document.createElement('div');
racketRight1.setAttribute('id', 'racketRight');
racketRight1.style.top = '50%';
racketRight1.style.transform = 'translate(0, -50%)';
racketRightArea.appendChild(racketRight1);