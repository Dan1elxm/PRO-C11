function preload(){
  shipAnimation = loadAnimation('ship-1.png', 'ship-2.png');
  seaImage = loadImage('sea.png');
}

let sea;

function setup(){
  createCanvas(400, 400);
  sea = createSprite(width / 2, height / 2);
  sea.addImage(seaImage);
  sea.velocity.x = -2;
  ship = createSprite(50, height / 2);
  ship.addAnimation('move', shipAnimation);
}

function draw() {
  background("blue");
  sea.position.x += sea.velocity.x;
  if (sea.position.x < 0) {
    sea.position.x = width / 2;
  }

  drawSprites();

  drawSprite(ship);
}