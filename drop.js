class Drop{
    constructor(x,y){
      var ops={
            'friction':0.1,
            'restitution':1,
        }
        this.radius=5;
        this.body=Bodies.circle(x,y,5,ops);
        World.add(world,this.body);
    }
    
    display(){
        fill("darkblue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
    raincycle(){
        if(this.body.position.y>600){
            Matter.Body.setPosition(this.body,{
                x:random(5,395),y:0
            })
        }
    }
}