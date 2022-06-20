const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  bottom = new ground(200,390,400,20)
  right = new ground(390,200,20,400)
  left = new ground(10,200,20,400)
  topWall = new ground(200,10,400,20)
  var ball_options = {
    restitution:0.95
  }
  ball = Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)
  btn1 = createImg('right.png'); 
  btn1.position(220,30); 
  btn1.size(50,50); 
  btn1.mouseClicked(hForce); 
  btn2 = createImg('up.png'); 
  btn2.position(20,30); 
  btn2.size(50,50); 
  btn2.mouseClicked(vForce);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,20)
  bottom.show()
  right.show()
  left.show()
  topWall.show()
  Engine.update(engine);
}
function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
}