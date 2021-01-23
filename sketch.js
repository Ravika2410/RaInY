const  world=Matter.World,
       engine = Matter.Engine,
       Bodies=Matter.Bodies,
       body = Matter.Body;
var myWorld,myEngine;
var drop;
var maxDrops=100;

function preload()
{
    
}

function setup()
{
createCanvas(500,800);

myEngine=engine.create();
myWorld=myEngine.world;

drop=[];

for(var i=0;i<maxDrops;i++)
{
drop.push(new drops(random(0,500),random(0,500),5));
}
    
}

function draw()
{
    background(0);

    engine.update(myEngine);

    for(var i=0;i<drop.length;i++)
    {
        drop[i].display();
    }


}   

