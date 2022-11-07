var ground
var IG;
var ground2
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
ground = loadImage("ground2.png")
Cloud2 = loadImage("cloud.png");

}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex = createSprite(50, 167);
 trex.addAnimation("running",trex_running);
 trex.scale = 0.7

 ground2 = createSprite(200,185)
 ground2.  addImage(ground); 
 ground2.velocityX = -10;

 IG = createSprite(200, 195, 400, 10)
IG.visible = false
}

function draw(){
  background("grey");
  if(keyDown("space") && trex.y >= 150) {

trex.velocityY = -10

  }
  if(ground2.x < 0) {

   ground2.x = ground2.width/2;


  }
  

  trex.velocityY = trex.velocityY + 0.8;
  trex.collide(IG)
  RN ();
  drawSprites();

}

function RN () {

  if(frameCount % 60 == 0) {
  var Cloud = createSprite(600,100);
  Cloud.addImage(Cloud2);
  Cloud.scale = 0.5

  Cloud.velocityX = -10
    Cloud.y = Math.round(random(10,60));

  }

}


