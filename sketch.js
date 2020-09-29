var tower, towerImage;
var door, doorImage, doorGroup;
var climber, climberImage, climberImage;
var ghost, ghostImage;
var invisibleGroup, invisibleG;
var START, END, gameState;
START=1;
END=0;
gameState=START;
var spookySound;

function preload(){
towerImage=loadImage("tower.png");

doorGroup=new Group();
doorImage=loadImage("door.png");

climberImage=loadImage("climber.png");
climberGroup=new Group();

ghostImage=loadImage("ghost-standing.png");

invisibleGroup=new Group();

spookySound=loadSound("spooky.wav");
}

function setup(){
createCanvas(600,600);
tower=createSprite(300,300,10,10);
tower.addImage("towerImage",towerImage);
tower.velocityY=1;

ghost=createSprite(200,200,50,50);
ghost.addImage("ghostImage",ghostImage);
ghost.scale=0.35;

spookySound.loop();
}


function draw(){
background(0);
if(gameState===START){



if(keyDown("left_arrow")){
ghost.x=ghost.x-3;
}
if(keyDown("right_arrow")){
ghost.x=ghost.x+3;
}
if(keyDown("space")){
ghost.velocityY=-5;
}
ghost.velocityY=ghost.velocityY+0.8;

if(tower.y>400){
tower.y=300;
}

if(climberGroup.isTouching(ghost)){
ghost.velocityY=0;
}
spawnDoors();

if(invisibleGroup.isTouching(ghost)||ghost.y>600){
ghost.destroy();
gameState=END;
}
drawSprites();
}
if(gameState===END){
stroke("yellow");
fill("yellow");
textSize(30);
text("Game Over", 230,250);

}




}
function spawnDoors(){
if(frameCount%240===0){
door=createSprite(200,-50,10,10);
climber=createSprite(200,10,10,10);
climber.addImage("climberImage",climberImage);
climber.velocityY=1;
door.addImage("doorImage",doorImage);
door.velocityY=1;
door.x=Math.round(random(120,400));
door.depth=ghost.depth;
ghost.depth=door.depth+1;
climber.x=door.x;
climber.lifetime=750;
climberGroup.add(climber);
invisibleG=createSprite(200,15,10,2);
invisibleG.width=climber.width;
invisibleG.x=door.x;
invisibleG.velocityY=1;
invisibleG.visible=true;
invisibleG.debug=true;
invisibleGroup.add(invisibleG);
door.lifetime=750;
doorGroup.add(door);

  }
  
  
  
  
}










