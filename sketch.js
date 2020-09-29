
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var grund;
var crush;
var dustbin1,dustbin2,dustbin3;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	crush = new Paper(100,650)
	dustbin1 = new Dustbin(640,610,60,15);
	dustbin2 = new Dustbin(630,560,15,60);
	dustbin3 = new Dustbin(690,560,15,60);

	
	ground = createSprite(400,670,800,20);
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);

	crush.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Body.applyForce(crush, crush.position, {x:570,y:600})
	}
}


