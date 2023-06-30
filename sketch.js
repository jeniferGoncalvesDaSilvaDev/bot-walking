let bot
let grass
let tamanho=64
let andarX=0
let andarY=0
let velocidade=64
let restart
function setup() {
  createCanvas(576, 576);
  bot=loadImage('bot6.png')
  grass=loadImage('grass2.jpg')
  
}

function draw() {
  background(255,255,255);
 for(let i=0; i<9; i++) {
      for(let j=0; j<9; j++) {
        image(grass,i*tamanho,j*tamanho,tamanho,tamanho)
      }
 }
  image(bot,andarX,andarY,tamanho,tamanho)
  //text('x: ${andarX}, y : ${andarY}',400,500)

  
  //keyPressed()
  if (andarX=== tamanho *8 && andarY===tamanho*8){
      rect(160,160,230,230)
      textSize(35)
      text('ganhou',220,300)
      
      restart= createButton('Reiniciar')
      restart.mousePressed(resetGame)
      noLoop()
    }

  if (andarX <0){
    andarX=0
  }
  if (andarY< 0){
    andarY=0
      
  }
  if(andarY > tamanho *8){
    andarY = tamanho *8
  }
  if(andarX > tamanho *8){
    andarX = tamanho *8
   }

  
  
}
function resetGame(){
  andarX=0
  andarY=0
  restart.remove()
  loop()
}
function keyPressed(){
  if (keyIsDown(UP_ARROW)){
    //andar para cima
    andarY-=velocidade
    
  }
  if(keyIsDown(DOWN_ARROW)){
    //andar para baixo
    andarY +=velocidade
    
  }
  if(keyIsDown(LEFT_ARROW)){
    // andar para esquerda
    andarX -=velocidade
    
  }
  if(keyIsDown(RIGHT_ARROW)){
    // andar para direita
    andarX+=velocidade
    
  }
}
