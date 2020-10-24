
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
var rope, roof
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rope1 = new rope(bobObject1.body, roofObject.body, bobDiameter*2, 0);
	bobObject1 = new bobObject(200,200,700,700);
	bobObject2 = new bobObject(200,200,700,700);
	bobObject3 = new bobObject(200,200,700,700);
	bobObject4 = new bobObject(200,200,700,700);
	bobObject5 = new bobObject(200,200,700,700);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



