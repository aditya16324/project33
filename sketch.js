const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;





function setup(){
createCanvas(1200,600)
engine=Engine.create();
world=engine.world
  box1=new Box(600,400); 
  box2=new Box(600,304);
  box3=new Box(800,400);
  box4=new Box (800,304);
  box5=new Box(800,190);
  box6=new Box(600,190);
 
  ground=new Ground(600,500,1200,50)

  log1=new Log (700,375,400);
 log2=new Log (700,244,400);
 log3=new Log (700,140,400);

  ball1=new Ball (400,400)

  chain1=new Chain(ball1.body,{x:400 ,y:50 })
}

function draw(){
  background("lightblue");
  Engine.update(engine)
  text(mouseX+"    "+mouseY,mouseX,mouseY)

box1.display();
box2.display();
log1.display();
box3.display();
box4.display();
box5.display();
box6.display();

log2.display();
log3.display();
ground.display();

ball1.display();

chain1.display();




}

function mouseDragged(){
  Matter.Body. setPosition (ball1.body,{x:mouseX,y:mouseY})
}





