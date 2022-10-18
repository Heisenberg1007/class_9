var sprite


function setup() {
  createCanvas(400,400);

  sprite = createSprite(200,150,100,100);
}

function draw() 
{
  background("blue");


  if (keyIsDown(RIGHT_ARROW)){
    sprite.position.x+=5
  }
  if (keyIsDown(LEFT_ARROW)){
    sprite.position.x+=-5
  }
  drawSprites()
}




