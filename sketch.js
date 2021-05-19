var mountaineer;  
var ground;
var obstacles;
var wall1;
var wall2;
var staticSlide;
var movingSlideGroup;

function setup() {
  createCanvas(displayWidth,displayHeight*3);
 ground = createSprite(670, displayHeight*3-20 , displayWidth, 40);
 wall1 = createSprite(5,displayHeight*3-10, 5,displayHeight*10)
 wall2 = createSprite(displayWidth-20,displayHeight*3-10, 5,displayHeight*10)
mountaineer = createSprite(displayWidth/2,displayHeight*3-100,40,40)

movingSlideGroup = new Group();

 for(var i= 100 ; i<displayHeight*3; i = i+200){
var randomWidth = Math.round(random(100,600))
var randomVel = Math.round(random(3,10))
var staticSlide = createSprite(10,i,randomWidth,20);
var staticRightSlide = createSprite(displayWidth-40,i,randomWidth,20)
var movingSlide = createSprite(120,i+100,100,20);

movingSlide.velocityX = randomVel

movingSlideGroup.add(movingSlide);
 }

}

function draw() {
  background("blue");  
  movingSlideGroup.bounceOff(wall1);
  movingSlideGroup.bounceOff(wall2);
  mountaineer.collide(ground);
  mountaineer.velocityY = 10 
  if(keyDown("space")){
mountaineer.velocityY = -10
  }

  if(mountaineer.isTouching(movingSlideGroup)){
  mountaineer.velocityY = 0
  movingSlideGroup.x = mountaineer.x
  }
  
   drawSprites();
}