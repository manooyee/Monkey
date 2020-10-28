var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

var survivalTime = 0;

function preload(){
  
  
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(400,400)
 
  monkey = createSprite(50,300,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,340,900,10);
  ground.velocityX= -4;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  score = 0;

}


function draw() {
  background(280);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score ="+ score,300,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time = "+ survivalTime, 100,100);
  
  if(ground.x < 0){
     ground.x = ground.width/2;
  }
    
  if(keyDown("space") && monkey.y >= -100){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
   
  food();
  rock();

  drawSprites();
}

function food(){
  if (frameCount % 80 === 0){
    banana = createSprite(400,200,10,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.08;
    banana.velocityX = -4;
    banana.lifetime = 150;
    FoodGroup.add(banana);
  }
}

function rock(){
  if (frameCount % 300 === 0){
    obstacle = createSprite(400,312,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.12;
    obstacle.velocityX = -4;
    obstacle.lifetime = 150;
    obstacleGroup.add(obstacle);
  }
}




