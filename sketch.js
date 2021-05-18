var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
   dustbinIMG=loadImage("dustbingreen.png")
   paperIMG=loadImage("paper.png")
}

	


function setup() {
	createCanvas(800, 700);
	circlemode=(RIGHT);

	paperSprite=Createsprite(width/2,80,10,10);
	paperSprite.addImage(paperIMG);
	paperSprite.scale=0.2;

	groundSprite=Createsprite(width/2,height-35,width,10);
	groundSprite.shapecolor=color("white")

	paper.Body=bodies.circle(Width/2 ,200,5,{restitution:0.3, isStatic:false});
    World.add (World.paperbody);

	//create a ground

	ground = Bodies.rectangle(width/2,650,width,10 , {isStatic:true} );
	World.add (world,ground)
	boxPosition=width/2-100;
	boxY=610;
	boxLeftSprite=createSprite(boxPosition,boxY,20,100);
	boxLeftSprite.shapeColor="yellow";

	boxLeftBody=Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic:true})
	World.add(world,boxLeftBody);

	boxRightSprite=createSprite(boxPosition+200,boxY,20,100);
	boxRightSprite.shapeColor="yellow";

	boxBottomSprite=createSprite(boxPosition+100,boxY+40,200,20);
	boxBottomSprite.shapeColor="yellow";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {

	
	paperSprite.x= paperBody.position.x 
	paperSprite.y= paperBody.position.y 
	drawSprites();
   

  rectMode(CENTER);
  background(0);
  
}
 

    

function keyPressed() {
	if (keyCode===UP_ARROW) {
		Matter.Body. applyForce(paperObject.body.position,{x:85,y:-85});	
	}
}
  ground.js.display();
  dustbin.js.display();
  paper.js.display();

	
	



