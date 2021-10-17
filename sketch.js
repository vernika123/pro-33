var Snow = []
var world 
var engine
var Engine = Matter.Engine
  
var World = Matter.World
 var Bodies = Matter.Bodies;

function setup() {
  
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
}

function preload () {
  snow1 = loadImage ("snow1.jpg")
}

function draw() {
  background(snow1);  
  
  Engine.update(engine);

  if (frameCount%60===0) {
    Snow.push(new snow (random(0,800),0))
  }
 
 for (var k = 0 ; k < Snow.length; k++) {
 Snow[k].display();
  }
 drawSprites();
}

