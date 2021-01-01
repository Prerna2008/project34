const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const MouseConstraint= Matter.Constraint;

var engine, world;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload() {
}

function setup(){
    var canvas = createCanvas(800,800);

    engine = Engine.create();
    world = engine.world;
    
    bob1 =new Pendulum(330,540)
    bob2 =new Pendulum(390,400)
    bob3 =new Pendulum(450,400)
    bob4 =new Pendulum(510,400)
    bob5 =new Pendulum(570,400)
    
    rope1 = new Sling(bob1.body,{x:330, y:200})
    rope2 = new Sling(bob2.body,{x:390, y:200})
    rope3 = new Sling(bob3.body,{x:450, y:200})
    rope4 = new Sling(bob4.body,{x:510, y:200})
    rope5 = new Sling(bob5.body,{x:570, y:200})
}
function draw(){
    background("pink");
    console.log(rope1.body)
    Engine.update(engine);
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
}
function mouseDragged(){
     Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
}