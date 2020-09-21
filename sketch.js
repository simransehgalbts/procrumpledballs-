
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	dustbinPosition=width/2-100
	dustbinY=710;


	dustbinleftSprite=createSprite(dustbinPosition, dustbinY, 20,100);
	dustbinleftSprite.shapeColor=color(25,200,10);

	dustbinLeftBody = Bodies.rectangle(dustbinPosition+20, dustbinY, 20,100 , {isStatic:true} );
	World.add(world, dustbinLeftBody);

	dustbinBase=createSprite(dustbinPosition+100, dustbinY+40, 200,20);
	dustbinBase.shapeColor=color(25,200,10);

	dustbinBottomBody = Bodies.rectangle(dustbinPosition+100, dustbinY+45-20, 200,20 , {isStatic:true} );
	World.add(world, dustbinBottomBody);

	dustbinleftSprite=createSprite(dustbinPosition+200 , dustbinY, 20,100);
	dustbinleftSprite.shapeColor=color(25,200,10);

	dustbinRightBody = Bodies.rectangle(dustbinPosition+200-20 , dustbinY, 20,100 , {isStatic:true} );
	World.add(world, dustbinRightBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



