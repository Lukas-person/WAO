var fixedRect, movingRect;
var thing;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "purple";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "purple";
  movingRect.debug = true;
  thing = createSprite(200,100,50,50);
  thing.shapeColor = "cyan";
  thing.debug = true;
}


function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isTouching(movingRect,thing)){
    movingRect.shapeColor = "blue";
  thing.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "purple";
    thing.shapeColor = "purple";
  }
  drawSprites();
}
