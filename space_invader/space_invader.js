
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;
///////////////////////////////////////////////////////////

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth) / 2;

var rightPressed = false;
var leftPressed = false;
var pressedSpace = false;
/////////////////////////////////////////////////////////////
var brickRowCount = 4;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}
/////////////////////////////////////////////////////////////
var score = 0;
/////////////////////////////////////////////////////////////
var bulletWidth = 5;
var bulletHeight = 5;
var x_shot = paddleX + ( paddleWidth / 2) ;
var y_shot = canvas.height-10;
var shotRadius = 2;
var bullets = [];
var br = 5;
var stat = 1;
////////////////////////////////////////////////////////////
/* class Bullet{
  constructor(){
    this.x = x_shot;
    this.y = y_shot;
    bullets.push(this);
  }
  draw(){
    this.y--;
    for(var c = 0; c < brickColumnCount; c++){
      for(var r = 0; r < brickRowCount; r++){
        var b = bricks[c][r];
      if (b.status == 1) {
        if( this.y > b.y && this.y < b.y+brickHeight){
          b.status = 0;
           }
        }
      }
    }
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, bulletWidth, bulletHeight);
  }
} */
//при отпускании пробела регаем пулю в массив пуль
document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    //console.log('Space pressed')
    bullets.push({
          pos: [x_shot, y_shot],
          status: [stat],   // положение
      });
  }
})
function drawBullet(){
  ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.fillRect(x_shot, y_shot, bulletWidth, bulletHeight);
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
          if (bricks[c][r].status == 1) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#FF0000";
            ctx.fill();
            ctx.closePath();
          }
        }
    }
}
function collisionDetection(){
  for(var c = 0; c < brickColumnCount; c++){
    for(var r = 0; r < brickRowCount; r++){
      var b = bricks[c][r];
    if (b.status == 1) {
      bullets.forEach(bullet => {
        if (bullet.pos[1] > b.y && bullet.pos[1] < b.y+brickHeight && bullet.pos[0] > b.x && bullet.pos[0] < b.x+brickWidth ){
          console.log(bullet.pos[1]);
          score++;
          b.status = 0;
          bullet.status = 0;
          if(score == brickRowCount*brickColumnCount) {
                          alert("YOU WIN, CONGRATULATIONS!");
                          document.location.reload();
                      }
        }
      });

    /*  if( y_shot > b.y && y_shot < b.y+brickHeight){
        b.status = 0;
      }*/
      }
    }
  }
}
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Score: "+score, 8, 20);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawPaddle();
    drawScore();
    collisionDetection();

    //bullets.forEach(shot => shot.draw());
    bullets.forEach(b => {
       if (b.status == 1){
          b.pos[1] -= 1;
      ctx.beginPath();
      ctx.arc(b.pos[0], b.pos[1], br, 0, 2 * Math.PI);
      ctx.stroke();
    }
  })

    if(rightPressed) {
       paddleX += 7;
       x_shot += 7;
     if (paddleX + paddleWidth > canvas.width-1){
           paddleX = canvas.width - paddleWidth -1;
           x_shot = paddleX + ( paddleWidth / 2);
                                             }
                     }
     else if(leftPressed) {
        paddleX -= 7;
        x_shot -= 7;
          if (paddleX < 0){
            paddleX = 1;
            x_shot = paddleX + ( paddleWidth / 2);
                          }
      }
  /*    if(pressedSpace ) {
        new Bullet();
    }*/
      //удалить пули за канвасом
       bullets = bullets.filter(b => {
         return b.pos[1] > 0 && b.status != 0
       })
}
function keyDownHandler(e) {
    if (e.key == 32) {
      pressedSpace = true;
    }
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }

}

function keyUpHandler(e) {
    if (e.key == 32) {
        pressedSpace = false;
    }
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }

}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
setInterval(draw, 10);
