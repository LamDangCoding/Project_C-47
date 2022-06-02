const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

let engine;
let world;
var INTRO = 0
var START = 1
var END = 2
var gameStates = 0
var player, playerImg
var enemiesGroup, enemy1, enemy1Img, enemy2, enemy2Img, enemy3, enemy3Img
var bullets = []
var boom, boomImg

function preload() {
enemy1Img = loadImage("./assets/enemy1.png")
enemy2Img = loadImage("./assets/enemy2.png")
enemy3Img = loadImage("./assets/enemy3.png")
boomImg = loadImage("./assets/explosion.png")
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  createSprite(400, 200, 50, 50);
  
  player = new Player(width/2, 500, 50, 150)
  enemiesGroup = new Group()
}

function draw() {
  background(255,255,255);  

  player.display(playerImg, width/2, 500, 50, 150)

  if(gameStates === 0) {
    player.visible = false
    text("Use arrow key to control player. Press space bar to begin", width/2, height/2-200)

    if(keyDown("space")) {
      text.visible = false
      player.visible = true
      gameStates = 1
    }
  }

  if(gameStates === 1) {

  }
  drawSprites();
}

function spawnEnemies() {
  enemiesGroup.add(enemy1, enemy2, enemy3)

  enemy1 = createSprite(width/2, height/2-100, 70, 40)
  enemy1.addImage("enemy1", enemy1Img)
  enemy1.addImage("boom", boomImg)
  enemy1.scale = 0.7

  enemy2 = createSprite(width/2, height/2-100, 70, 40)
  enemy2.addImage("enemy2", enemy2Img)
  enemy2.addImage("boom", boomImg)
  enemy2.scale = 0.7

  enemy3 = createSprite(width/2, height/2-100, 70, 40)
  enemy3.addImage("enemy1", enemy3Img)
  enemy3.addImage("boom", boomImg)
  enemy3.scale = 0.7
}

