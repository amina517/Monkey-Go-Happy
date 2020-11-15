
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var ground;
var score;
var stime;

function preload(){
  
  
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey = createSprite(70,450,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.2;
  
  
  ground = createSprite(300,600,600,200);
  ground.shapeColor = "peru";
  
  
  
  bananaGroup =new Group();
  obstacleGroup =new Group();
  
}


function draw() {
  background("skyblue");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 400,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  stime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ stime, 10,50);
  
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y >= 100 ){
    monkey.velocityY = -12;
  }

  monkey.velocityY = monkey.velocityY + 0.8;
  
  spawnFood();
  spawnRocks();
  
  drawSprites();
}

function spawnFood(){
if (frameCount % 200 === 0) {
  banana = createSprite(300,300,20,20);
  banana.y = Math.round(random(250,300));
  banana.addImage(bananaImage);
  banana.scale = 0.19;
  banana.velocityX = -3;
  
  banana.lifetime = 134;
  
  bananaGroup.add(banana);
 }
}

function spawnRocks(){
  if (frameCount % 200 === 0){
    rock = createSprite(600,480,20,20);
    rock.addImage(obstacleImage);
    rock.scale = 0.19;
    rock.velocityX = -7;
    
    rock.lifetime = 134;
    
    obstacleGroup.add(rock);   
  }
  
}





