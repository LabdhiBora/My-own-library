var fixedRect,movingRect
var box
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,100,40,40);
  fixedRect.shapeColor="red";

  movingRect=createSprite(300,250,50,50);
  movingRect.shapeColor="pink";

  box=createSprite(200,350,40,40);
}

function draw() {
  background(0); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  
  if(isTouching(box,movingRect)===true){
   box.shapeColor="yellow";
   movingRect.shapeColor="green";
  }
  else {
   box.shapeColor="red";
   movingRect.shapeColor="pink";
  }
  drawSprites();
}
