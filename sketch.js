var monkey
var monkey_img
var monkey1
var backImage
var backImage_img
var ground
var invisibleground
var BananasGroup
var ObstaclesGroup 
var stone_img
var score
var banana_img
var PLAY= 1
var END= 0
var gameState=PLAY          

function preload(){
backImage_img=loadImage("jungle.jpg");
  
monkey_img=loadAnimation("Monkey_01.png","Monkey_02.png",
                          "Monkey_03.png","Monkey_04.png",
                          "Monkey_05.png","Monkey_06.png",
                          "Monkey_07.png","Monkey_08.png",
                          "Monkey_09.png","Monkey_10.png",);
  banana_img=loadImage("banana.png");
  stone_img=loadImage("stone.png");
  monkey1=loadImage("Monkey_01.png");
}

function setup() {
 createCanvas(600,300)
 backImage=createSprite(300,150,10,10);
  backImage.addImage(backImage_img)
  backImage.scale= 0.6
 
  invisibleground=createSprite(93,285,1000,10);
  invisibleground.visible=false;
  
  textSize(20);
fill("white");

  score=0; 
  
  monkey=createSprite(90,250,10,10);
  monkey.addAnimation("monkey is moving",monkey_img);
  monkey.scale= 0.15
  monkey.setCollider("circle",0,0,200);
 
  BananasGroup= new Group();
  ObstaclesGroup= new Group();
  
  ground=createSprite(93,293,1000,10);
  ground.visible=false;  
  ground.x = ground.width /2;
}

function draw() {
  background(225);
  drawSprites();
  createEdgeSprites();
  spawnBananas();
  spawnObstacles();
  text("Score: "+ score, 10, 100);
  
  if(gameState===PLAY){
  ground.velocityX= -10
    
score = Math.round(World.frameCount/11);
  if(keyDown("space") && monkey.y >= 230){
     monkey.velocityY= -16;
     
     }
     
     monkey.velocityY= monkey.velocityY+0.8;
     
monkey.collide(invisibleground); 
  
    switch(score){
      case 10: monkey .scale= 0.14;
        break;
      case 20: monkey .scale= 0.13;
        break;
      case 30: monkey .scale= 0.12;
        break;
      case 40: monkey .scale= 0.11 ;
        break;
        
        default:break;
    }
    
if(BananasGroup.isTouching(monkey)){
   BananasGroup.destroyEach();
   }
  


if(ObstaclesGroup.isTouching(monkey)){
  gameState=END;
}
  

}
else if (gameState === END){
  
  ObstaclesGroup.setVelocityXEach(0);
  monkey.velocityY=0;
  BananasGroup.setVelocityXEach(0);  
  ObstaclesGroup.setLifetimeEach(-40);
  
   
}
     
}
function spawnBananas(){
   
  if(World.frameCount %80 ==0){
    var banana
    banana=createSprite(630,150,10,10);
  banana.addImage(banana_img)
  banana.scale= 0.05; 
    banana.velocityX= -8;
    BananasGroup.add(banana); 
   
  }
  
}

function spawnObstacles(){
  
  if(World.frameCount %90==0){
 var stone
 stone=createSprite(647,260,10,10)
 stone.addImage(stone_img)
 stone.scale= 0.2
 stone.velocityX= -10;
    ObstaclesGroup.add(stone);

  }  
}