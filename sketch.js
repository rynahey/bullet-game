var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1000,500); 

  bullet=createSprite(50,200,40,10);
  bullet.shapeColor=("white");
  bullet.velocityX=10;

 wall=createSprite(800, 200,thickness,height/2);
 wall.shapeColor=("white");

 speed=random(223,321);
 weight=random(30,52);

 thickness=random(22,83)
}

function draw() {
  background("lightBlue");
damageControl();

  drawSprites();
}
function damageControl(){
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22500;
  if(deformation>10)
  {
    wall.shapeColor="red";
  }

  if(deformation<5)
  {
    wall.shapeColor="green";
  }
}
}
