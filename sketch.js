const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100, 280, 10);

	ground = new Ground(400, 300, 800, 20);

	dustbin1 = new Dustbin(600, 285, 100, 15);
	dustbin2 = new Dustbin(645, 230, 15, 110);
	dustbin3 = new Dustbin(550, 230, 15, 110);

	//Engine.run(engine);
  
}


function draw() {
  background("yellow");
  Engine.update(engine)
  paper1.display();

  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x : 15, y : -13});
	}
}