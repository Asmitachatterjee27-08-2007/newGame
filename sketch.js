var ground;
var playingChar, villain;
var obstacle1group;

function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  ground = createSprite(width / 2, height - 50, width, 22);

  playingChar = createSprite(width - 100, height - 100, 100, 50);

  villain = createSprite(100, height - 100, 100, 50);

  obstacle1group = new Group();
}

function draw() {
  background("sky");
  drawSprites();
  spawnObstacleslev1();
  if (keyDown("UP_ARROW"))
    playingChar.y -= 30;
  if (keyDown("RIGHT_ARROW"))
    playingChar.x += 5;

  //if (playingChar.y <= height / 3)
    playingChar.velocityY += 0.9;

  playingChar.collide(ground);

  if (villain.isTouching(obstacle1group))
    villain.y -= 30;
  
    villain.velocityY += 1;

  villain.collide(ground);

}

function spawnObstacleslev1() {
  if (frameCount % 95 === 0) {
    var obstacle1 = createSprite(0, height - 100, 20, 20);
    obstacle1.velocityX = 10;
    obstacle1group.add(obstacle1);
  }
}