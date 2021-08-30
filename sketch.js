const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var polygon;
var ball;
var ground1;
var slingshot;
var stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11,
block12, block13, block14, block15, block16,block17, block18, block19, block20, block21, block22,
block23, block24, block25, block26;
function preload(){
polygon = loadImage("polygon.png");
}
function setup(){
var canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;
Engine.run(engine);
ball = Bodies.circle(60, 200, 30);
World.add(world, ball);
ground1 = new Ground(600, 390, 1200, 20);
slingshot = new Slingshot(this.ball, {x:100, y:200});
stand1 = new Stand(410, 300, 250, 10);
stand2 = new Stand(700, 180, 200, 10);
block1 = new Block(310, 275, 30, 40);
block2 = new Block(340, 275, 30, 40);
block3 = new Block(370, 275, 30, 40);
block4 = new Block(400, 275, 30, 40);
block5 = new Block(430, 275, 30, 40);
block6 = new Block(460, 275, 30, 40);
block7 = new Block(490, 275, 30, 40);
block8 = new Block(340, 235, 30, 40);
block9 = new Block(370, 235, 30, 40);
block10 = new Block(400, 235, 30, 40);
block11 = new Block(430, 235, 30, 40);
block12 = new Block(460, 235, 30, 40);
block13 = new Block(370, 195, 30, 40);
block14 = new Block(400, 195, 30, 40);
block15 = new Block(430, 195, 30, 40);
block16 = new Block(400, 155, 30, 40);
block17 = new Block(640, 155, 30, 40);//righttriangle
block18 = new Block(670, 155, 30, 40);
block19 = new Block(700, 155, 30, 40);
block20 = new Block(720, 155, 30, 40);
block21 = new Block(750, 155, 30, 40);
block22 = new Block(660, 115, 30, 40);
block23 = new Block(690, 115, 30, 40);
block24 = new Block(720, 115, 30, 40);
block25 = new Block(690, 75, 30, 40);
}
function draw(){
background(255, 95, 31);
textSize(35)
text('Drag the Hexagonal stone and Release it to launch it',145,40);
ground1.display();
slingshot.display();
stand1.display();
stand2.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
imageMode(CENTER);
image(polygon, ball.position.x, ball.position.y, 40, 40);
}
function mouseDragged(){
Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}
function mouseReleased(){
slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
    slingshot.attach(this.ball);
    }
}
