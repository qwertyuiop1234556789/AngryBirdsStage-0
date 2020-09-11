const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var ground, log1, log2, log3, log4, pig1, pig2, bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    //box1 = new Box(700,320,70,70);
    log1 = new Log(810, 260, 290, PI/2);
    log2 = new Log(810, 180, 290, PI/2);
    pig1 = new Pig(810, 320);
    pig2 = new Pig(810, 240);
    bird = new Bird(200, 200);
    ground = new Ground(600, 390, 1200, 20);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    log1.display();
    log2.display();
    pig1.display();
    pig2.display();
    bird.display();
    ground.display();
   
}