
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;
	
	roof = new Roof(400,350,600,30);

	bob1 = new Bob(260,600,70)
    chain = new Rope(bob1.body,{x:260,y:366});

	bob2 = new Bob(330,600,70)
	chain2 = new Rope(bob2.body,{x:330,y:366});
	
	bob3 = new Bob(400,600,70)
	chain3 = new Rope(bob3.body,{x:400,y:366});
	
	bob4 = new Bob(470,600,70)
	chain4 = new Rope(bob4.body,{x:470,y:366});
	
	bob5 = new Bob(540,600,70)
    chain5 = new Rope(bob5.body,{x:540,y:366});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");

  roof.display();

 chain.display();
  bob1.display();
 
  chain2.display();
  bob2.display();

  chain3.display();
  bob3.display();

  chain4.display();
  bob4.display();

  chain5.display();
  bob5.display();
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === RIGHT_ARROW){
	
	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:200,y:-200});
	
	}
	
	}
