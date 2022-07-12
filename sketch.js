
var trex ,trex_running ,suelo ,sueloimg ,sueloInvisible;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  sueloimg = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  
  //crear sprite de Trex
  trex=createSprite(50,160,20,20);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;
  suelo=createSprite(200,190,600,20);
  suelo.addImage(sueloimg);
  suelo.velocityX = -5;
  sueloInvisible=createSprite(200,200,600,15);
  sueloInvisible.visible = false;
  
}

function draw(){
  background("white")
  
  
  if(keyDown("space")&& trex.y >= 140){
  trex.velocityY= -5;
  }
  trex.velocityY = trex.velocityY +0.5;
  trex.collide(sueloInvisible);
  
  if(suelo.x <0){
    suelo.x = suelo.width/2;
  }
  drawSprites();
}
 