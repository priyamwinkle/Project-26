const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint

var bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5;



function setup (){
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	bob1Diameter=40;

	bobpositionX=width/2;
	positionY=height/4+500;
	

	bob1=new Bob(bobpositionX-bob1Diameter*2,positionY,bob1Diameter);
	bob2=new Bob(bobpositionX-bob1Diameter,positionY,bob1Diameter);
	bob3=new Bob(bobpositionX,positionY,bob1Diameter);
	bob4=new Bob(bobpositionX+bob1Diameter,positionY,bob1Diameter);
	bob5=new Bob(bobpositionX+bob1Diameter*2,positionY,bob1Diameter);

	//roof=new Roof(width/2,height/4,width/3,20);
	roof=new Roof(800,100,500,50)

	rope1=new Rope(bob1.body,roof.body,-bob1Diameter*2,0);
	rope2=new Rope(bob2.body,roof.body,-bob1Diameter*1,0);
	rope3=new Rope(bob3.body,roof.body,0,0);
	rope4=new Rope(bob4.body,roof.body,bob1Diameter*1,0);
	rope5=new Rope(bob5.body,roof.body,bob1Diameter*2,0);
	


	


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");

  roof.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  
 
}



