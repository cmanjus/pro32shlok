const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25,ground2,ground3;
var polygon,slingShot, backgroundImg, bg;
var gameState = "attachedSling";
var score;
function preload()
{
	polygon_img = loadImage("regular-hexagon.jpg");
  getBackgroundImage();
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  score = 0;
  //createSprite(400, 200, 50, 50);
  //polygon holder with slings
  var options = {
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
  }
  polygon= Bodies.circle(50, 200, 20,options);
  World.add(world,polygon);

  slingShot = new SlingShot(polygon,{x:100,y:200});
  ground1 = new Ground(390,305,240,20);
  ground2 = new Ground(690,225,180,20);
  ground3 = new Ground(400,380,800,40);
  //level one
  block1 = new Box(300,275,30,40);
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);
  //level two
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  //level three
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  //top
  block16 = new Box(390,155,30,40);

  block17 = new Box(690,195,30,40);
  block18 = new Box(720,195,30,40);
  block19 = new Box(750,195,30,40);
  block20 = new Box(660,195,30,40);
  block21 = new Box(630,195,30,40);
  block22 = new Box(690,155,30,40);
  block23 = new Box(660,155,30,40);
  block24 = new Box(720,155,30,40);
  block25 = new Box(690,115,30,40);
}

function draw() {
  Engine.update(engine);
  if(backgroundImg){
  background(backgroundImg); 
  }
  text("SCORE : "+score,650,40); 
  
  fill(color(255, 0, 255));
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill(color(0, 0, 255));
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill(color(255,0,0));
  block13.display();
  block14.display();
  block15.display();
  fill(color(255,255,0));
  block16.display();
  fill(color(0,0,255));
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill(color(255,0,0));
  block22.display();
  block23.display();
  block24.display();
  fill(color(255,255,0));
  block25.display();
  ground1.display();
  ground2.display();
  ground3.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  //console.log(polygon);
  imageMode(CENTER);
  image(polygon_img, polygon.position.x, polygon.position.y,40,40);
  slingShot.display();
  drawSprites();
}
function mouseDragged(){
   if (gameState!=="launched"){
        Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingShot.fly();
    gameState = "launched";
}
function keyPressed(){
    if (keyCode === 32){
        slingShot.attach(polygon);
        gameState = "attachedSling";
    }
}
async function getBackgroundImage(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    if(hour>6 && hour<18){
        bg = "bg.png"
    }
    else{
        bg = "bg2.jpg"
    }
    backgroundImg = loadImage(bg);
}