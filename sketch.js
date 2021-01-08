const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5,rope1;



function setup (){
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bob1Diameter=40;

	bob1=new Bob(240,600,80);
	bob2=new Bob(320,600,80);
	bob3=new Bob(400,600,80);
	bob4=new Bob(480,600,80);
	bob5=new Bob(560,600,80);
	roof=new Roof(400,100,600,40);
	rope1=new Rope(bob1.body,roof.body,-bob1Diameter*2,0);


	


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  drawSprites();
 
}



