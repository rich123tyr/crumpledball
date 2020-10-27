
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
	crush = new Paper(100,550,20)
	dustbin1 = new Dustbin(660,630,250,25);
	dustbin2 = new Dustbin(550,535,25,200);
	dustbin3 = new Dustbin(770,535,25,200);

	
	ground =new Ground(400,670,800,20);
	

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
	ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Body.applyForce(crush.body, crush.body.position, {x:45,y:-90})
	}
}


