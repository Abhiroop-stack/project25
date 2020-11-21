
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,dustbinImg;
var paperObject,paperImg;

function preload()
{
dustbinImg = loadImage("sprites/dustbin.js");
paperImg = loadImage("sprites/paper.js");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	  ground = createSprite(800,650,10000,10);
	  ground.shapeColor=color("yellow");
	  
	  box1 = createSprite(700,640,100,20);
	  box1.addImage(dustbinImg);
	  

	  paperObject=createSprite(200,650,20,20)
      paperObject.addImage(paperImg);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	paperObject.velocityX=45;
	paperObject.velocityY=-45;
	}
	if(paperObject.x>659){
		paperObject.velocityX=0;
		paperObject.velocityY=3;
		if(paperObject.y>640){
			paperObject.velocityY=0;
		}
	}
	
}

