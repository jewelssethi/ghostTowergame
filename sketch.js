var movingsprite
var fixedsprite

function setup() {
  createCanvas(800,400);
  movingsprite=createSprite(400, 200, 50, 50);
  


  fixedsprite=createSprite(400, 200, 50, 50);


}

function draw() {
  background("black");  


  movingsprite.y=World.mouseY
 movingsprite.x=World.mouseX

movingsprite.shapeColor=("green")
fixedsprite.shapeColor=("green")

touching()



  drawSprites();
}
