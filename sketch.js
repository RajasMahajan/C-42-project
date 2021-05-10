const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var thunder,thunderimage;
var mananimation,man;
var um,drop=[];
var engine,world;
var maxdrop=200;
function preload(){
    mananimation=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
    thunderimage=loadImage("4.png");
}

function setup(){
   createCanvas(400,600);
   engine=Engine.create();
   world=engine.world;
    man=createSprite(200,400,50,50);
    man.addAnimation("manone",mananimation);
    man.scale="0.5";
    um=new Umbrala();
   if(frameCount%30===0){
       for(var i = 0;i<maxdrop;i++){
           drop.push(new Drop(random(10,390),0))
       }
   }
}

function draw(){
 background("black");
 Engine.update(engine);
   um.display();
   for(var i =0;i<maxdrop;i++){
    drop[i].display();
    drop[i].raincycle();
   }
   if(frameCount%70===0){
    thunder=createSprite(200,50,40,40);
    thunder.addImage(thunderimage)
    thunder.lifetime=10;
   }
 drawSprites();
}   

