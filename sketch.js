var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var red1,red2,red3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true,restitution:0.0});
	World.add(world, packageBody);
	red1=new DropZone(400,650,100,20);
	red2=new DropZone(300,550,20,100);
	red3=new DropZone(500,550,20,100);
	

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  red1.display();
  red2.display();
  red3.display();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  Engine.update(engine);
  
  drawSprites();
 
  
 
}

function keyPressed() {
 if (keyCode ===DOWN_ARROW) {
	 Body.setStatic(packageBody,false)
	 
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



