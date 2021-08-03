var bg,sleep,eat,clean,brush,gym
var astronaut,edges;

function preload(){
bg = loadImage("images/iss.png")
sleep = loadAnimation("images/sleep.png"); 
brush = loadAnimation("images/brush.png");
gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png",)
eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png"); 
clean = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png"); 
move = loadAnimation("images/move1.png","images/move1.png","images/move2.png","images/move2.png");
}

function setup() {
  createCanvas(800,400);
  astronaut=createSprite(400, 200, 50, 50);
  astronaut.addAnimation("moving",move)
  astronaut.scale=0.1
  astronaut.velocityX=1
  astronaut.velocityY=1
  edges=createEdgeSprites()

}

function draw() {
  background(bg); 
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.x=150
    astronaut.velocityX=0
    astronaut.velocityY=0
  } 
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("cleaning",clean)
    astronaut.changeAnimation("cleaning")
    astronaut.x=100
    astronaut.velocityX=0
    astronaut.velocityY=0
  } 
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    //astronaut.x=100
    astronaut.velocityX=1
    astronaut.velocityY=1
  } 
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("sleeping",sleep)
    astronaut.changeAnimation("sleeping")
    astronaut.x=100
    astronaut.velocityX=0
    astronaut.velocityY=0
  } 
  astronaut.bounceOff(edges)
  drawSprites();
}