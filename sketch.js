var horse1,horse2,horse3,horse4
var skeleton
var bg
var pumkin
var backGround
function preload(){
    bg=loadImage("sprites/bg.png")
    pumkin=loadImage("sprites/pumkin.png")
    skeleton=loadImage("sprites/sk.png")
    horse1=loadAnimation("sprites/horse1.png","sprites/horse2.png","sprites/horse3.png","sprites/horse4.png")   
    
}
function setup() {
 createCanvas(displayWidth,displayHeight)
 console.log(width)
 backGround=createSprite(width/2,height/2)
 backGround.velocityX=-4
 backGround.addAnimation("image",bg)
 backGround.scale=5
 console.log(backGround.width)
 horse=createSprite(150,height-150)
 horse.addAnimation("horse",horse1)
 horse.mirrorX(-1)
 horse.scale=2
}
function draw(){
background("red")
if(backGround.x<50){
backGround.x=backGround.width/2


}

drawSprites()
spawnPumkin()
spawnSkeleton()
}


function spawnPumkin(){
    if (frameCount%80===0){
    var pumkin1=createSprite(width,random(400,height-150))
    pumkin1.addImage("pumkin",pumkin)
    pumkin1.velocityX=-6
  pumkin1.depth = horse.depth;
   horse.depth = horse.depth + 1; 
    
    }
}
function spawnSkeleton(){
   if (frameCount%120===0){
    var pumkin1=createSprite(width,random(350,height-190))
   skeleton1.addImage("skeleton",pumkin)
    skeleton1.velocityX=-6
  skeleton.depth = horse.depth;
    horse.depth = horse.depth + 1; 
} 
}