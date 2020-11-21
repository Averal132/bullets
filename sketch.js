var bullet,wall;
var spead,weight,thickness;

function setup() {
  createCanvas(1600,600);
thickness=random(22,83);
 bullet= createSprite(50, 200, 50, 10);
 wall=createSprite(1200,300,thickness,300)

 spead=random(223,321)
 weight=random(30,52)

 bullet.velocityX=spead;
 wall.shapeColor="green"

}

function draw() {

  background(0);
 
 if(hascollided(bullet,wall)){
bullet.velocityX=0
var damage=0.5*weight*spead*spead/(thickness*thickness*thickness);
if(damage>10){
wall.shapeColor="red"

}
if(damage<10){
  wall.shapeColor="green"
  
  }


 }
    

  
  drawSprites();
}
function hascollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
return true;


}
return false;


}
